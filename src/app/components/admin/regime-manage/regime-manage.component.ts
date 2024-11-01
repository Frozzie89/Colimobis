import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
    selector: 'app-regime-manage',
    templateUrl: './regime-manage.component.html',
    styleUrls: ['./regime-manage.component.scss'],
    imports: [IonContent],
    standalone: true
})
export class RegimeManageComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
