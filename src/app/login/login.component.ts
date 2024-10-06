import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../classes/user';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-login',
    templateUrl: './login.component.html',
    imports: [FormsModule, NgIf],
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    user!: User;

    constructor(private route: Router) { }

    ngOnInit() {
        this.user = new User()
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            this.route.navigate(['regime-search'])
        }
    }
}
