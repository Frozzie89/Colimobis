import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../modules/header/header.component";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Regime } from 'src/app/classes/regime';
import { FormsModule, NgForm } from '@angular/forms';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-regime-form',
    templateUrl: './regime-form.component.html',
    styleUrls: ['./regime-form.component.scss'],
    imports: [NgIf, IonContent, HeaderComponent, FormsModule, RouterModule, IonIcon],
    standalone: true
})
export class RegimeFormComponent implements OnInit {

    title = 'Formulaire de régime'
    regime: Regime = new Regime()
    action = 'create'

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private regimeService: RegimeDataService
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id']

        this.regimeService.regimeList$.subscribe(regimes => {
            const regimeJson = regimes.find(regime => regime._id?.includes(id)) || new Regime()
            this.regime = Regime.fromJson(regimeJson)
        })

        this.action = this.route.snapshot.params['action'] || 'create'
    }

    onSubmit(regimeForm: NgForm) {
        if (regimeForm.valid) {

            switch (this.action) {
                case 'create':
                    this.regimeService.save(this.regime)
                    // this.regimeService.regimeList.push(this.regime)
                    break;

                case 'edit':
                    this.regimeService.update(this.regime)
                    // const index = this.regimeService.regimeList.findIndex(item => item.id === this.regime.id)
                    // this.regimeService.regimeList[index] = this.regime
                    break;
            }

        }

        this.router.navigate(['admin/regime-manage'])
    }

}
