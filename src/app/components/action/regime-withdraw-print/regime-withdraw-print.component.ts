import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone'
import { HeaderComponent } from "../../modules/header/header.component";
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-regime-withdraw-print',
    templateUrl: './regime-withdraw-print.component.html',
    styleUrls: ['./regime-withdraw-print.component.scss'],
    imports: [IonContent, IonIcon, RouterModule, HeaderComponent],
    standalone: true,
})
export class RegimeWithdrawPrintComponent implements OnInit {
    title = 'Démarrer un chantier'

    constructor() { }

    ngOnInit() { }

}
