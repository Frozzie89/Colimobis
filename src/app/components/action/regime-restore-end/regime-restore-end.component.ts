import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone'
import { EndFormComponent } from "../../modules/end-form/end-form.component";
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { Regime, RegimeState } from 'src/app/classes/regime';
import { map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-regime-restore-end',
    templateUrl: './regime-restore-end.component.html',
    styleUrls: ['./regime-restore-end.component.scss'],
    imports: [IonContent, IonGrid, IonRow, IonCol, EndFormComponent, NgIf],
    standalone: true
})
export class RegimeRestoreEndComponent implements OnInit {

    equipment!: boolean
    activity!: boolean

    constructor(
        private route: ActivatedRoute,
        private regimeService: RegimeDataService
    ) { }


    ngOnInit() {
        this.route.queryParams.pipe(
            map(params => {
                this.equipment = params['equipment'] === 'true';
                this.activity = params['activity'] === 'true';

                const newRegimeState = this.getState(this.equipment, this.activity);
                return { newRegimeState, id: this.route.snapshot.params['id'] };
            }),
            switchMap(({ newRegimeState, id }) =>
                this.regimeService.regimeList$.pipe(
                    map(regimes => {
                        const regimeJson = regimes.find(regime => regime._id.includes(id));
                        const regime = Regime.fromJson(regimeJson);
                        regime.state = newRegimeState;

                        return regime;
                    })
                )
            )
        ).subscribe(regime => {
            this.regimeService.update(regime);
        });
    }
    private getState(equipment: boolean, activity: boolean): RegimeState {
        const states: RegimeState[][] = [
            [RegimeState.RETURNED_UNDONE, RegimeState.ERROR],
            [RegimeState.RETURNED_UNDONE, RegimeState.AUTHORIZED]
        ]

        return states[Number(equipment)][Number(activity)]
    }

}
