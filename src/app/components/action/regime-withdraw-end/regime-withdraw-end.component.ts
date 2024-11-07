import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone'
import { EndFormComponent } from "../../modules/end-form/end-form.component";

@Component({
    selector: 'app-regime-withdraw-end',
    templateUrl: './regime-withdraw-end.component.html',
    styleUrls: ['./regime-withdraw-end.component.scss'],
    imports: [IonContent, EndFormComponent],
    standalone: true
})
export class RegimeWithdrawEndComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
