import { NgFor } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Regime } from 'src/app/classes/regime';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-regime-table',
    templateUrl: './regime-table.component.html',
    styleUrls: ['./regime-table.component.scss'],
    imports: [NgFor],
    standalone: true
})
export class RegimeTableComponent implements OnInit {

    @Input() regimeList: Regime[] = []

    @Output() onAction = new EventEmitter<Regime>()

    constructor() { }

    ngOnInit() { }

    actionEvent(regime: Regime): void {
        this.onAction.emit(regime)
    }

}
