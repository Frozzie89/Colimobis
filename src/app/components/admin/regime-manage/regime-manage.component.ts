import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { RegimeTableComponent } from "../../modules/regime-table/regime-table.component";
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { Regime } from 'src/app/classes/regime';
import { HeaderComponent } from "../../modules/header/header.component";

@Component({
    selector: 'app-regime-manage',
    templateUrl: './regime-manage.component.html',
    styleUrls: ['./regime-manage.component.scss'],
    imports: [IonContent, RegimeTableComponent, HeaderComponent],
    standalone: true
})
export class RegimeManageComponent implements OnInit {

    title = 'Administrer les régimes'
    regimeList: Regime[] = []

    constructor(
        private regimeService: RegimeDataService
    ) { }

    ngOnInit() {
        this.regimeList = this.regimeService.regimeList
    }

}
