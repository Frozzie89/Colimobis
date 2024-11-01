import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../modules/header/header.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-regime-form',
    templateUrl: './regime-form.component.html',
    styleUrls: ['./regime-form.component.scss'],
    imports: [IonContent, HeaderComponent, RouterModule],
    standalone: true
})
export class RegimeFormComponent implements OnInit {

    title = 'Formulaire de régime'

    constructor(
        private router: RouterModule
    ) { }

    ngOnInit() { }

}
