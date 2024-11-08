import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Audit } from '../classes/audit';

@Injectable({
    providedIn: 'root'
})
export class AuditDataService {

    constructor(
        private databaseService: DatabaseService
    ) { }

    async getAllAudits() {

    }

    async save(audit: Audit) {

    }

    async update(updatedAudit: Audit): Promise<void> {

    }

    async cleanOldAudits() {

    }

}
