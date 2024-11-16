import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { RegimeStatusComponent } from "../../modules/regime-status/regime-status.component";
import { Regime } from 'src/app/classes/regime';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { RegimeDescriptionComponent } from "../../modules/regime-description/regime-description.component";
import { HeaderComponent } from "../../modules/header/header.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-regime-withdraw',
    templateUrl: './regime-withdraw.component.html',
    styleUrls: ['./regime-withdraw.component.scss'],
    imports: [IonContent, IonIcon, RegimeStatusComponent, RegimeDescriptionComponent, RouterModule, HeaderComponent, NgIf],
    standalone: true
})
export class RegimeWithdrawComponent implements OnInit {

    regime!: Regime
    idRegime!: string
    title = 'Démarrer un chantier'
    isDisclaimerChecked = false

    constructor(
        private route: ActivatedRoute,
        private regimeService: RegimeDataService,
        private router: Router
    ) { }

    ngOnInit() {
        this.idRegime = this.route.snapshot.params['id']
        this.regimeService.regimeList$.subscribe(regimes => {
            const regimeJson = regimes.find(regime => regime._id.includes(this.idRegime))
            this.regime = Regime.fromJson(regimeJson)
        })
    }

    back(): void {
        const searchTerm = history.state.searchTerm
        this.router.navigate(['regime-list', searchTerm])
    }

    disclaimerCheckToggle() {
        this.isDisclaimerChecked = !this.isDisclaimerChecked
    }

}
