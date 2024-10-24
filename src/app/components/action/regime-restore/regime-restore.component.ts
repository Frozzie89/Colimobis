import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { RegimeStatusComponent } from "../../modules/regime-status/regime-status.component";
import { ActivatedRoute } from '@angular/router';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { Regime } from 'src/app/classes/regime';

@Component({
    selector: 'app-regime-restore',
    templateUrl: './regime-restore.component.html',
    styleUrls: ['./regime-restore.component.scss'],
    imports: [IonContent, RegimeStatusComponent],
    standalone: true
})
export class RegimeRestoreComponent implements OnInit {

    regime!: Regime

    constructor(
        private route: ActivatedRoute,
        private regimeService: RegimeDataService
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id']
        this.regime = this.regimeService.regimeList.find(regime => regime.id.includes(id)) || new Regime()
    }


}
