import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone'
import { HeaderComponent } from "../../modules/header/header.component";


@Component({
    selector: 'app-regime-withdraw-print',
    templateUrl: './regime-withdraw-print.component.html',
    styleUrls: ['./regime-withdraw-print.component.scss'],
    imports: [IonContent, IonIcon, HeaderComponent],
    standalone: true,
})
export class RegimeWithdrawPrintComponent implements OnInit {
    title = 'Démarrer un chantier'

    constructor() { }

    ngOnInit() { }

}
