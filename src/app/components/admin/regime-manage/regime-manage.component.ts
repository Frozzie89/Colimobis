import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { RegimeTableComponent } from "../../modules/regime-table/regime-table.component";
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { Regime } from 'src/app/classes/regime';
import { HeaderComponent } from "../../modules/header/header.component";
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-regime-manage',
    templateUrl: './regime-manage.component.html',
    styleUrls: ['./regime-manage.component.scss'],
    imports: [IonContent, RegimeTableComponent, HeaderComponent, RouterModule, IonIcon],
    standalone: true
})
export class RegimeManageComponent implements OnInit {

    title = 'Administrer les régimes'
    regimeList: Regime[] = []

    constructor(
        private router: Router,
        private regimeService: RegimeDataService
    ) { }

    ngOnInit() {
        this.regimeService.regimeList$.subscribe(regimes => this.regimeList = regimes)
    }

    editRegime(regime: Regime) {
        this.router.navigate(['admin/regime-manage/regime-form', { id: regime._id, action: 'edit' }])
    }

    deleteRegime(regime: Regime) {
        this.regimeService.deleteRegime(regime._id)
    }

}
