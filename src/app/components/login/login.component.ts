import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../classes/user';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';


@Component({
    standalone: true,
    selector: 'app-login',
    templateUrl: './login.component.html',
    imports: [FormsModule, NgIf, IonContent, IonGrid, IonRow, IonCol],
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

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
}
