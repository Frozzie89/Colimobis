import { Injectable } from '@angular/core';
import { Regime } from '../classes/regime';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegimeDataService {
    regimeList: Regime[] = []

    constructor(
        private http: HttpClient,
    ) { }

    public async initializeService() {
        const platform = Capacitor.getPlatform();

        if (platform === 'android') {
            console.log('Fetch from Android');
            this.loadDataFromAndroid();
        } else {
            console.log('Fetch from Web');
            this.loadDataFromWeb();
        }
    }

    private loadDataFromWeb() {
        const storedData = localStorage.getItem(environment.localStorage.regimes);

        if (!storedData) {
            this.http.get<Regime[]>('assets/data/regimes.json').subscribe({
                next: res => {
                    this.regimeList = res;
                    localStorage.setItem(environment.localStorage.regimes, JSON.stringify(res));
                },
                error: err => console.error('Error loading data from JSON:', err)
            });
        } else {
            this.regimeList = JSON.parse(storedData);
        }
    }

    private loadDataFromAndroid() {
        let dataString: string;

        Filesystem.readFile({
            path: environment.regimePaths.android,
            directory: Directory.Documents,
            encoding: Encoding.UTF8
        }).then(async result => {
            if (typeof result.data === 'string') {
                dataString = result.data
            } else {
                const blob = new Blob([result.data], { type: 'application/json' })
                dataString = await this.convertBlobToString(blob)
            }

            const parsedData = JSON.parse(dataString);
            this.regimeList = parsedData.map((item: any) => Object.assign(new Regime(), item))

        }).catch(err => console.error('Error reading file on Android:', err))
    }

    private convertBlobToString(blob: Blob): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsText(blob);
        });
    }
}
