import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-regime-search',
    templateUrl: './regime-search.component.html',
    imports: [FormsModule],
    styleUrls: ['./regime-search.component.scss'],
})
export class RegimeSearchComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {

    }

    queryRegimes(regimeId: string): void {
        this.router.navigate(['regime-list', regimeId])
    }

}
