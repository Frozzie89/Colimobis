import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { RegimeStatusComponent } from "../../modules/regime-status/regime-status.component";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { Regime } from 'src/app/classes/regime';
import { HeaderComponent } from "../../modules/header/header.component";

@Component({
    selector: 'app-regime-restore',
    templateUrl: './regime-restore.component.html',
    styleUrls: ['./regime-restore.component.scss'],
    imports: [IonContent, RegimeStatusComponent, IonGrid, IonCol, IonRow, RouterModule, HeaderComponent],
    standalone: true
})
export class RegimeRestoreComponent implements OnInit {

    regime!: Regime
    title = 'Quitter un chantier'

    constructor(
        private route: ActivatedRoute,
        private regimeService: RegimeDataService,
        private router: Router
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id']
        const regimeJson = this.regimeService.regimeList.find(regime => regime.id.includes(id))
        this.regime = Regime.fromJson(regimeJson)
    }

    back(): void {
        const searchTerm = history.state.searchTerm
        this.router.navigate(['regime-list', searchTerm])
    }

}
