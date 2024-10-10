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

    regimeId: string = ''

    constructor(
        private regimeService: RegimeDataService
    ) { }

    ngOnInit() {
        console.log(this.regimeService.regimeList);

    }

}
