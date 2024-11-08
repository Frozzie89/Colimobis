import { Component, Input, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
    selector: 'module-end-form',
    templateUrl: './end-form.component.html',
    styleUrls: ['./end-form.component.scss'],
    imports: [IonIcon, IonGrid, IonRow, IonCol],
    standalone: true
})
export class EndFormComponent implements OnInit {

    @Input() stopForDebug = false
    stopwatch = 6;
    intervalId: any;

    constructor(private router: Router) { }

    ngOnInit() {
        if (!this.stopForDebug) {
            this.startCountdown();
        }
    }

    startCountdown() {
        this.intervalId = setInterval(() => this.decrementStopwatch(), 1000);
    }

    decrementStopwatch() {
        if (this.stopwatch <= 0) {
            this.router.navigate(['/login']);
            clearInterval(this.intervalId);
        } else {
            this.stopwatch -= 1;
        }
    }

    toRegimeSearch() {
        clearInterval(this.intervalId);
        this.router.navigate(['/regime-search']);
    }

    toLogin() {
        clearInterval(this.intervalId);
        this.router.navigate(['/login']);
    }
}
