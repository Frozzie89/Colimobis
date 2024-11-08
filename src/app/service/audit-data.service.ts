import { Injectable } from '@angular/core';
import { Audit } from '../classes/audit';
import { BehaviorSubject } from 'rxjs';
import PouchDB from 'pouchdb'

@Injectable({
    providedIn: 'root'
})
export class AuditDataService {
    private auditListSubject = new BehaviorSubject<Audit[]>([])
    public auditList$ = this.auditListSubject.asObservable()
    private database!: PouchDB.Database;
    private currentBatch = 0; // Track the current batch

    constructor() {
        this.initDB()
    }

    initDB() {
        this.database = new PouchDB('audits')
    }

    async getAuditsBatch(batchSize: number = 50) {
        try {
            const result = await this.database.allDocs({
                include_docs: true,
                skip: this.currentBatch * batchSize,
                limit: batchSize
            });

            const auditBatch = result.rows
                .filter(row => row.doc)
                .map(row => {
                    const doc = row.doc as unknown as Audit;
                    return Audit.fromJson(doc); // Ensure each item is an instance of the Audit class
                })
                .sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort by date in descending order

            const currentAudits = this.auditListSubject.getValue();
            this.auditListSubject.next([...currentAudits, ...auditBatch]); // Append new audits to the existing list
            this.currentBatch++; // Increment the batch count

        } catch (error) {
            console.error('Error fetching audits batch:', error);
        }
    }

    public resetPagination() {
        this.currentBatch = 0; // Reset the batch counter
        this.auditListSubject.next([]); // Clear the current audit list
    }

    async save(audit: Audit) {
        try {
            await this.database.put(audit)
        } catch (error) {
            console.error('Error saving audit:', error);
        }
    }

    async cleanOldAudits() {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        try {
            const result = await this.database.allDocs({ include_docs: true });

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
                    return this.database.remove(row.doc._id, row.doc._rev);
                }

                return false
            });

            await Promise.all(deletePromises);
            // await this.getAllAudits(); // Refresh the audit list

        } catch (error) {
            console.error('Error cleaning old audits:', error);
        }
    }


}
