import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone'
import { EndFormComponent } from "../../modules/end-form/end-form.component";
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

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
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.equipment = params['equipment'] === 'true'
            this.activity = params['activity'] === 'true'
        });
    }

}
