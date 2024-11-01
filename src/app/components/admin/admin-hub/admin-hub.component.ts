import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../modules/header/header.component";

@Component({
    selector: 'app-admin-hub',
    templateUrl: './admin-hub.component.html',
    styleUrls: ['./admin-hub.component.scss'],
    imports: [IonContent, IonGrid, IonRow, IonCol, HeaderComponent],
    standalone: true
})
export class AdminHubComponent implements OnInit {

    title = 'Menu admin'

    constructor() { }

    ngOnInit() { }

}
