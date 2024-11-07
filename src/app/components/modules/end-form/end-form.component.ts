import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone'

@Component({
    selector: 'module-end-form',
    templateUrl: './end-form.component.html',
    styleUrls: ['./end-form.component.scss'],
    imports: [IonIcon, IonGrid, IonRow, IonCol, RouterModule],
    standalone: true
})
export class EndFormComponent implements OnInit {

    stopwatch = 6
    intervalId: any

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.intervalId = setInterval(() => {
            if (this.stopwatch <= 0) {
                this.router.navigate(['login'])
                this.stopwatch = 6
                clearInterval(this.intervalId)
            }

            this.stopwatch -= 1
        }, 1000);
    }

    toRegimeSearch() {
        clearInterval(this.intervalId)
        this.router.navigate(['/regime-search'])
    }
    toLogin() {
        clearInterval(this.intervalId)
        this.router.navigate(['/login'])
    }

}
