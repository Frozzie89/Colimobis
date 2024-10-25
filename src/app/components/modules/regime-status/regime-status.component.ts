import { Component, Input, OnInit } from '@angular/core';
import { Regime } from 'src/app/classes/regime';

@Component({
    selector: 'app-regime-status',
    templateUrl: './regime-status.component.html',
    styleUrls: ['./regime-status.component.scss'],
    standalone: true
})
export class RegimeStatusComponent implements OnInit {

    @Input() regime: Regime = new Regime()

    constructor(
    ) { }

    ngOnInit() {

    }

}
