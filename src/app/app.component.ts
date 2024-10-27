import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { RegimeDataService } from './service/regime-data.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
    constructor(
        private regimeService: RegimeDataService
    ) {
        this.initApp()
    }

    initApp() {
        StatusBar.setBackgroundColor({ color: '#00008b' })
        StatusBar.hide()
        StatusBar.setOverlaysWebView({ overlay: true })

        this.regimeService.initializeService()
    }
}
