import { Injectable } from '@angular/core';
import { Regime, RegimeState } from '../classes/regime';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import PouchDB from 'pouchdb'

@Injectable({
    providedIn: 'root'
})
export class RegimeDataService {
    private regimeListSubject = new BehaviorSubject<Regime[]>([]);
    public regimeList$ = this.regimeListSubject.asObservable();
    private database!: PouchDB.Database;

    constructor() {
        this.initDB()
    }

    initDB() {
        this.database = new PouchDB('regimes')
    }

    async getAllRegimes() {
        try {
            const result = await this.database.allDocs({ include_docs: true });
            const regimeList = result.rows
                .filter(row => row.doc)
                .map(row => {
                    const doc = row.doc as unknown as Regime
                    return {
                        _id: doc._id,
                        requestNumber: doc.requestNumber,
                        ot: doc.ot,
                        rf: doc.rf,
                        label: doc.label,
                        state: doc.state as RegimeState
                    } as Regime;
                });
            this.regimeListSubject.next(regimeList); // Update the BehaviorSubject with the fetched list
        } catch (error) {
            console.error('Error fetching regimes:', error);
        }

    }

    async save(regime: Regime) {
        try {
            await this.database.put(regime);
            this.getAllRegimes()
        } catch (error) {
            console.error('Error saving regime:', error);
        }
    }


    async update(updatedRegime: Regime): Promise<void> {
        try {
            const existingDoc = await this.database.get(updatedRegime._id);

            // Create an updated document by merging existing fields with updated fields
            const regimeToSave = {
                ...existingDoc,               // Preserve `_id` and `_rev`
                requestNumber: updatedRegime.requestNumber,
                ot: updatedRegime.ot,
                rf: updatedRegime.rf,
                label: updatedRegime.label,
                state: updatedRegime.state
            };

            // Save the updated document
            await this.database.put(regimeToSave);

            this.getAllRegimes();
        } catch (error) {
            console.error('Error updating regime:', error);
        }
    }

    async deleteRegime(id: string): Promise<void> {
        try {
            const existingDoc = await this.database.get(id);

            // Delete the document using `_id` and `_rev`
            await this.database.remove(existingDoc._id, existingDoc._rev);

            this.getAllRegimes();
        } catch (error) {
            console.error('Error deleting regime:', error);
        }
    }

}
