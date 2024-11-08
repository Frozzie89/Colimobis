import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../classes/user';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonGrid, IonRow, IonCol, IonIcon, IonInput } from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from "../modules/header/header.component";
import { FocusInputDirective } from 'src/app/directives/focus-input.directive';


@Component({
    standalone: true,
    selector: 'app-login',
    templateUrl: './login.component.html',
    imports: [FormsModule, NgIf, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonInput, HeaderComponent, FocusInputDirective],
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    title = "S'authentifier"
    user!: User;

    constructor(private route: Router) { }

    ngOnInit() {
        this.user = new User()
    }

    onSubmit(form: NgForm) {
        let redirect: string

        if (form.valid) {
            if (form.value['badgeNumberUser'] == '151515'
                && form.value['NniUser'] == '15151515'
                && form.value['passwordUser'] == 'Trihom123'
            ) {
                redirect = 'admin'
            } else {
                redirect = 'regime-search'
            }

            form.resetForm()
            this.route.navigate([redirect])
        }
    }

    debugFillAdminform() {
        if (!environment.production) {
            this.user.badgeNumber = '151515'
            this.user.nni = '15151515'
            this.user.password = 'Trihom123'
        }
    }
}
