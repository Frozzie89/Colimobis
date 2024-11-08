import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonGrid, IonRow, IonCol, IonIcon, IonInput } from '@ionic/angular/standalone';
import { HeaderComponent } from "../modules/header/header.component";

@Component({
    standalone: true,
    selector: 'app-regime-search',
    templateUrl: './regime-search.component.html',
    imports: [FormsModule, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonInput, HeaderComponent, FormsModule],
    styleUrls: ['./regime-search.component.scss'],
})
export class RegimeSearchComponent implements OnInit {
    title = 'Sélection d\'attestations'
    regimeId = ''

    constructor(
        private router: Router
    ) { }

    ngOnInit() {

    }

    queryRegimes(regimeId: string): void {
        this.router.navigate(['regime-list', regimeId])
    }

}
