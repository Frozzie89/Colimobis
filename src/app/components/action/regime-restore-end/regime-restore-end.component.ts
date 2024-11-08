import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone'
import { EndFormComponent } from "../../modules/end-form/end-form.component";

@Component({
    selector: 'app-regime-restore-end',
    templateUrl: './regime-restore-end.component.html',
    styleUrls: ['./regime-restore-end.component.scss'],
    imports: [IonContent, IonGrid, IonRow, IonCol, EndFormComponent],
    standalone: true
})
export class RegimeRestoreEndComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
