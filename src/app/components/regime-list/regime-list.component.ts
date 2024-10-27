import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Regime } from 'src/app/classes/regime';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../modules/header/header.component";

@Component({
    standalone: true,
    selector: 'app-regime-list',
    templateUrl: './regime-list.component.html',
    styleUrls: ['./regime-list.component.scss'],
    imports: [NgFor, FormsModule, IonContent, IonGrid, IonRow, IonCol, HeaderComponent]
})
export class RegimeListComponent implements OnInit {

    regimeList: Regime[] = []
    regimeAction = -1
    searchTerm = ''
    title = 'Sélection d\'attestations'

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private regimeService: RegimeDataService
    ) { }

    ngOnInit() {
        this.searchTerm = this.route.snapshot.params['search']
        this.regimeList = this.regimeService.regimeList.filter(regime => regime.id.includes(this.searchTerm))
    }

    moveBack() {
        this.router.navigate(['regime-search'])
    }

    toAction(regime: Regime) {
        switch (this.regimeAction) {
            case RegimeActionForm.REMOVE_ACTION:
                this.router.navigate(['action/regime-withdraw', regime.id], { state: { searchTerm: this.searchTerm } })
                break;
            case RegimeActionForm.WITHDRAW_ACTION:
                this.router.navigate(['action/regime-restore', regime.id], { state: { searchTerm: this.searchTerm } })
                break;
        }
    }
}

enum RegimeActionForm {
    REMOVE_ACTION = 0,
    WITHDRAW_ACTION,
    PRINT_ACTION
}