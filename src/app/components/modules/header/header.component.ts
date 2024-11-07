import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
    selector: 'module-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [IonHeader, IonToolbar, IonTitle, NgIf],
    standalone: true
})
export class HeaderComponent implements OnInit {

    @Input() title = ''
    @Input() hideRightPart = false

    constructor(private router: Router) { }

    ngOnInit() { }

    logout() {
        this.router.navigate(['login'])
    }

}
