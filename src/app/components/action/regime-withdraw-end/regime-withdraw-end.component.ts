import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone'
import { EndFormComponent } from "../../modules/end-form/end-form.component";
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { Regime, RegimeState } from 'src/app/classes/regime';
import { ActivatedRoute } from '@angular/router';
import { Audit } from 'src/app/classes/audit';
import { v4 as uuidv4 } from 'uuid';
import { AuditDataService } from 'src/app/service/audit-data.service';
import { take } from 'rxjs/operators';

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
        private auditService: AuditDataService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.regimeService.regimeList$.pipe(take(1)).subscribe(regimes => {
            const regimeJson = regimes.find(regime => regime._id.includes(id));
            if (!regimeJson) return; // Handle case if regime not found

            let regime = Regime.fromJson(regimeJson);

            const previousState = regime.state; // Capture the previous state
            regime.state = RegimeState.STARTED;

            // Update the regime and then create an audit entry
            this.regimeService.update(regime).then(() => {
                const audit = new Audit(
                    uuidv4(), // Generate a unique ID for the audit
                    new Date(),
                    regime._id,
                    previousState,
                    regime.state
                );

                // Save the audit entry
                this.auditService.save(audit);
            });
        });
    }

}
