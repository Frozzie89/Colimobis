import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [IonHeader, IonToolbar, IonTitle],
    standalone: true
})
export class HeaderComponent implements OnInit {

    @Input() title = ''

    constructor(private router: Router) { }

    ngOnInit() { }

    logout() {
        this.router.navigate(['login'])
    }

}
