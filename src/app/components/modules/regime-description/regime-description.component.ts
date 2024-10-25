import { Component, Input, OnInit } from '@angular/core';
import { Regime } from 'src/app/classes/regime';

@Component({
    selector: 'app-regime-description',
    templateUrl: './regime-description.component.html',
    styleUrls: ['./regime-description.component.scss'],
    standalone: true
})
export class RegimeDescriptionComponent implements OnInit {

    @Input() regime: Regime = new Regime()

    constructor() { }

    ngOnInit() { }

}
