import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonIcon, IonList, IonItem, IonInfiniteScroll, IonInfiniteScrollContent, IonFooter } from '@ionic/angular/standalone'
import { InfiniteScrollCustomEvent } from '@ionic/core';
import { Audit } from 'src/app/classes/audit';
import { AuditDataService } from 'src/app/service/audit-data.service';

@Component({
    selector: 'app-audit-list',
    templateUrl: './audit-list.component.html',
    styleUrls: ['./audit-list.component.scss'],
    imports: [IonContent, IonIcon, IonList, IonItem, IonInfiniteScroll, IonInfiniteScrollContent, IonFooter, RouterModule, NgFor],
    standalone: true
})
export class AuditListComponent implements OnInit {
    auditList: Audit[] = []
    private loadingMore = false; // Prevent multiple requests at once
    private noMoreData = false;  // Flag when there's no more data to load

    constructor(
        private auditDataService: AuditDataService,
        private router: Router
    ) { }

    ngOnInit() {
        this.fetchNextAudits();
        this.auditDataService.auditList$.subscribe(audits => {
            this.auditList = audits;
            if (audits.length % 50 !== 0) { // If less than 50, it's likely the last batch
                this.noMoreData = true;
            }
        });
    }

    private async fetchNextAudits() {
        if (this.loadingMore || this.noMoreData) return;

        this.loadingMore = true;
        await this.auditDataService.getAuditsBatch(50); // Fetches 50 audits at a time
        this.loadingMore = false;
    }

    onIonInfinite(event: Event) {
        this.fetchNextAudits();
        setTimeout(() => {
            (event as InfiniteScrollCustomEvent).target.complete();
            if (this.noMoreData) {
                (event as InfiniteScrollCustomEvent).target.disabled = true; // Disable further scroll if no more data
            }
        }, 500);
    }

    back() {
        this.auditDataService.resetPagination()
        this.router.navigate(['admin'])
    }
}
