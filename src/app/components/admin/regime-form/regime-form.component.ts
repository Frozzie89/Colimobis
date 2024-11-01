import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../modules/header/header.component";
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { Regime } from 'src/app/classes/regime';
import { FormsModule, NgForm } from '@angular/forms';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-regime-form',
    templateUrl: './regime-form.component.html',
    styleUrls: ['./regime-form.component.scss'],
    imports: [NgIf, IonContent, HeaderComponent, FormsModule, RouterModule],
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
        const regimeJson = this.regimeService.regimeList.find(regime => regime.id.includes(id)) || new Regime()
        this.regime = Regime.fromJson(regimeJson)

        this.action = this.route.snapshot.params['action'] || 'create'
    }

    onSubmit(regimeForm: NgForm) {
        if (regimeForm.valid) {

            switch (this.action) {
                case 'create':
                    this.regimeService.regimeList.push(this.regime)
                    break;

                case 'edit':
                    const index = this.regimeService.regimeList.findIndex(item => item.id === this.regime.id)
                    this.regimeService.regimeList[index] = this.regime
                    break;
            }

        }

        this.router.navigate(['admin/regime-manage'])
    }

}
