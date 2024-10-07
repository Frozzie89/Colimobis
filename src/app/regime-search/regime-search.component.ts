import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-regime-search',
    templateUrl: './regime-search.component.html',
    imports: [FormsModule],
    styleUrls: ['./regime-search.component.scss'],
})
export class RegimeSearchComponent implements OnInit {

    regimeId: string = ''

    constructor() { }

    ngOnInit() { }

}
