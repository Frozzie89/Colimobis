import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../modules/header/header.component";
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-admin-hub',
    templateUrl: './admin-hub.component.html',
    styleUrls: ['./admin-hub.component.scss'],
    imports: [IonContent, IonGrid, IonRow, IonCol, HeaderComponent, RouterModule],
    standalone: true
})
export class AdminHubComponent implements OnInit {

    title = 'Menu admin'

    constructor(
        private router: Router
    ) { }

    ngOnInit() { }

}
