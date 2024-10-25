import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { RegimeStatusComponent } from "../../modules/regime-status/regime-status.component";
import { Regime } from 'src/app/classes/regime';
import { ActivatedRoute, Router } from '@angular/router';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { RegimeDescriptionComponent } from "../../modules/regime-description/regime-description.component";

@Component({
    selector: 'app-regime-withdraw',
    templateUrl: './regime-withdraw.component.html',
    styleUrls: ['./regime-withdraw.component.scss'],
    imports: [IonContent, RegimeStatusComponent, RegimeDescriptionComponent],
    standalone: true
})
export class RegimeWithdrawComponent implements OnInit {

    regime!: Regime

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

}
