import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Regime } from 'src/app/classes/regime';
import { RegimeDataService } from 'src/app/service/regime-data.service';

@Component({
    standalone: true,
    selector: 'app-regime-list',
    templateUrl: './regime-list.component.html',
    styleUrls: ['./regime-list.component.scss'],
    imports: [NgFor]
})
export class RegimeListComponent implements OnInit {

    regimeList: Regime[] = []

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private regimeService: RegimeDataService
    ) { }

    ngOnInit() {
        const search = this.route.snapshot.params['search']
        this.regimeList = this.regimeService.regimeList.filter(regime => regime.id.includes(search))
    }

    moveBack() {
        this.router.navigate(['regime-search'])
    }
}
