import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone'

@Component({
    selector: 'module-end-form',
    templateUrl: './end-form.component.html',
    styleUrls: ['./end-form.component.scss'],
    imports: [IonIcon, IonGrid, IonRow, IonCol, RouterModule],
    standalone: true
})
export class EndFormComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
