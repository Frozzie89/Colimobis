import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Regime } from 'src/app/classes/regime';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
    selector: 'module-regime-table',
    templateUrl: './regime-table.component.html',
    styleUrls: ['./regime-table.component.scss'],
    imports: [NgFor, NgIf, FormsModule, IonIcon],
    standalone: true
})
export class RegimeTableComponent implements OnInit {

    @Input() regimeList: Regime[] = []
    @Input() isEditable: boolean = false

    @Output() onAction = new EventEmitter<Regime>()
    @Output() onDelete = new EventEmitter<Regime>()
    @Output() onEdit = new EventEmitter<Regime>()

    constructor() { }

    ngOnInit() { }

    actionEvent(regime: Regime): void {
        this.onAction.emit(regime)
    }

    deleteEvent(regime: Regime): void {
        this.onDelete.emit(regime)
    }

    editEvent(regime: Regime): void {
        this.onEdit.emit(regime)
    }
}
