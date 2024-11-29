import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Regime, RegimeState } from 'src/app/classes/regime';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { IonContent, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../modules/header/header.component";
import { RegimeTableComponent } from "../modules/regime-table/regime-table.component";

@Component({
    standalone: true,
    selector: 'app-regime-list',
    templateUrl: './regime-list.component.html',
    styleUrls: ['./regime-list.component.scss'],
    imports: [FormsModule, IonContent, IonGrid, IonRow, IonCol, IonIcon, HeaderComponent, RegimeTableComponent]
})
export class RegimeListComponent implements OnInit {

    regimeList: Regime[] = []
    regimeFilteredList: Regime[] = []
    regimeAction: RegimeActionForm = RegimeActionForm.NONE
    searchTerm = ''
    title = 'Sélection d\'attestations'

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private regimeService: RegimeDataService
    ) { }

    ngOnInit() {
        this.searchTerm = this.route.snapshot.params['search']
        this.regimeService.regimeList$.subscribe(regimes => {
            this.regimeList = regimes.filter(regime => regime._id?.includes(this.searchTerm))
            this.regimeFilteredList = this.regimeList.filter(regime => regime.state === RegimeState.STARTED)
        })
    }

    moveBack() {
        this.router.navigate(['regime-search'])
    }

    toAction(regime: Regime) {
        switch (this.regimeAction) {
            case RegimeActionForm.REMOVE_ACTION:
                this.router.navigate(['action/regime-withdraw', regime._id], { state: { searchTerm: this.searchTerm } })
                break;
            case RegimeActionForm.WITHDRAW_ACTION:
                this.router.navigate(['action/regime-restore', regime._id], { state: { searchTerm: this.searchTerm } })
                break;
        }
    }

    onRadioButtonChange(element: any) {
        this.regimeList = this.regimeList.filter(regime => regime.state === RegimeState.STARTED)
    }

}

enum RegimeActionForm {
    NONE = -1,
    REMOVE_ACTION = 0,
    WITHDRAW_ACTION,
    PRINT_ACTION
}