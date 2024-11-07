import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone'


@Component({
    selector: 'app-regime-withdraw-print',
    templateUrl: './regime-withdraw-print.component.html',
    styleUrls: ['./regime-withdraw-print.component.scss'],
    imports: [IonContent, IonGrid, IonRow, IonCol],
    standalone: true,
})
export class RegimeWithdrawPrintComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
