import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon, IonInput } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../modules/header/header.component";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Regime } from 'src/app/classes/regime';
import { FormsModule, NgForm } from '@angular/forms';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { NgIf } from '@angular/common';
import { FocusInputDirective } from 'src/app/directives/focus-input.directive';

@Component({
    selector: 'app-regime-form',
    templateUrl: './regime-form.component.html',
    styleUrls: ['./regime-form.component.scss'],
    imports: [IonContent, IonIcon, IonInput, FormsModule, RouterModule, HeaderComponent, FocusInputDirective],
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
        this.action = this.route.snapshot.params['action'] || 'create'

        this.regimeService.regimeList$.subscribe(regimes => {
            const regimeJson = regimes.find(regime => regime._id?.includes(id)) || new Regime()
            this.regime = Regime.fromJson(regimeJson)
        })
    }

    onSubmit(regimeForm: NgForm) {
        if (regimeForm.valid) {

            switch (this.action) {
                case 'create':
                    this.regimeService.save(this.regime)
                    break;

                case 'edit':
                    this.regimeService.update(this.regime)
                    break;
            }

        }

        this.router.navigate(['admin/regime-manage'])
    }

}        
