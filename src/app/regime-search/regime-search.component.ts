import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegimeDataService } from '../service/regime-data.service';

@Component({
    standalone: true,
    selector: 'app-regime-search',
    templateUrl: './regime-search.component.html',
    imports: [FormsModule],
    styleUrls: ['./regime-search.component.scss'],
})
export class RegimeSearchComponent implements OnInit {

    constructor(
        private regimeService: RegimeDataService
    ) { }

    ngOnInit() {

    }

    queryRegimes(regimeId: string): void {
        const foundRegimes = this.regimeService.regimeList.filter(regime => regime.id.includes(regimeId))

        console.log(foundRegimes);
    }

}
