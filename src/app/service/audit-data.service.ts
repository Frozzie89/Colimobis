import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Audit } from '../classes/audit';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuditDataService {
    private auditListSubject = new BehaviorSubject<Audit[]>([])
    public auditList$ = this.auditListSubject.asObservable()
    documentID = 'audits'

    constructor(
        private databaseService: DatabaseService
    ) { }

    async getAllAudits() {
        try {
            const result = await this.databaseService.database.allDocs({ include_docs: true });
            const auditList = result.rows
                .filter(row => row.doc)
                .map(row => {
                    const doc = row.doc as unknown as Audit
                    return {
                        _id: doc._id,
                        date: doc.date,
                        regimeId: doc.regimeId,
                        stateBefore: doc.stateBefore,
                        stateCurrent: doc.stateCurrent,
                    } as Audit;
                });
            this.auditListSubject.next(auditList); // Update the BehaviorSubject with the fetched list
        } catch (error) {
            console.error('Error fetching regimes:', error);
        }
    }

    async save(audit: Audit) {
        try {
            await this.databaseService.database.put(audit);
            this.getAllAudits()
        } catch (error) {
            console.error('Error saving regime:', error);
        }
    }

    async cleanOldAudits() {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        try {
            const result = await this.databaseService.database.allDocs({ include_docs: true });

            // Filter audits that are more than one year old
            const oldAudits = result.rows
                .filter(row => {
                    const doc = row.doc as unknown as Audit;
                    const auditDate = new Date(doc.date);
                    return auditDate < oneYearAgo;
                });

            // Delete each old audit document
            const deletePromises = oldAudits.map(row => {
                if (row.doc) {
                    return this.databaseService.database.remove(row.doc._id, row.doc._rev);
                }

                return false
            });

            await Promise.all(deletePromises);
            await this.getAllAudits(); // Refresh the audit list

        } catch (error) {
            console.error('Error cleaning old audits:', error);
        }
    }


}
