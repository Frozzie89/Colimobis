import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone'
import { EndFormComponent } from "../../modules/end-form/end-form.component";
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { Regime, RegimeState } from 'src/app/classes/regime';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-regime-withdraw-end',
    templateUrl: './regime-withdraw-end.component.html',
    styleUrls: ['./regime-withdraw-end.component.scss'],
    imports: [IonContent, EndFormComponent],
    standalone: true
})
export class RegimeWithdrawEndComponent implements OnInit {

    constructor(
        private regimeService: RegimeDataService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id']
        this.regimeService.regimeList$.subscribe(regimes => {
            const regimeJson = regimes.find(regime => regime._id.includes(id))
            let regime = Regime.fromJson(regimeJson)

            regime.state = RegimeState.DEMARRE

            this.regimeService.update(regime)
        })
    }

}
