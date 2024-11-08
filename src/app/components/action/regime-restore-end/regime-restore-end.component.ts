import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone'
import { EndFormComponent } from "../../modules/end-form/end-form.component";
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { Regime, RegimeState } from 'src/app/classes/regime';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { Audit } from 'src/app/classes/audit';
import { AuditDataService } from 'src/app/service/audit-data.service';
import { v4 as uuidv4 } from 'uuid';

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
    regimeStateBefore!: RegimeState
    regimeStateCurrent!: RegimeState

    constructor(
        private route: ActivatedRoute,
        private regimeService: RegimeDataService,
        private auditService: AuditDataService
    ) { }


    ngOnInit() {
        this.route.queryParams.pipe(
            map(params => {
                this.equipment = params['equipment'] === 'true';
                this.activity = params['activity'] === 'true';

                const newRegimeState = this.getState(this.equipment, this.activity);
                this.regimeStateCurrent = newRegimeState;

                return { newRegimeState, id: this.route.snapshot.params['id'] };
            }),
            switchMap(({ newRegimeState, id }) =>
                this.regimeService.regimeList$.pipe(
                    map(regimes => {
                        const regimeJson = regimes.find(regime => regime._id.includes(id));
                        const regime = Regime.fromJson(regimeJson);

                        this.regimeStateBefore = regime.state;
                        regime.state = newRegimeState;

                        return regime;
                    }),
                    distinctUntilChanged((prev, curr) => prev.state === curr.state) // Prevent duplicate emissions for same state
                )
            ),
            tap(regime => {
                this.regimeService.update(regime);

                const audit = new Audit(
                    uuidv4(), // Generate a unique _id for the audit entry
                    new Date(),
                    regime._id,
                    this.regimeStateBefore,
                    this.regimeStateCurrent
                );
                this.auditService.save(audit);
            })
        ).subscribe();
    }

    private getState(equipment: boolean, activity: boolean): RegimeState {
        const states: RegimeState[][] = [
            [RegimeState.RETURNED_UNDONE, RegimeState.ERROR],
            [RegimeState.RETURNED_UNDONE, RegimeState.AUTHORIZED]
        ]

        return states[Number(equipment)][Number(activity)]
    }

}
