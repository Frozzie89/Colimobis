import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../classes/user';

@Component({
    standalone: true,
    selector: 'app-login',
    templateUrl: './login.component.html',
    imports: [FormsModule],
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    user!: User;

    constructor() { }

    ngOnInit() {
        this.user = new User('', '', '')
    }

    onSubmit() {
        console.log(this.user.toString());
    }
}
