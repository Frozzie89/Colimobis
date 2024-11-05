import { Injectable } from '@angular/core';
import { Regime, RegimeState } from '../classes/regime';
import { DatabaseService } from './database.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class RegimeDataService {
    private regimeListSubject = new BehaviorSubject<Regime[]>([]);
    public regimeList$ = this.regimeListSubject.asObservable();
    documentID = 'regimes'

    constructor(
        private databaseService: DatabaseService
    ) { }

    async getAllRegimes() {
        try {
            const result = await this.databaseService.database.allDocs({ include_docs: true });
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
            await this.databaseService.database.put(regime);
            this.getAllRegimes()
        } catch (error) {
            console.error('Error saving regime:', error);
        }
    }


    async update(updatedRegime: Regime): Promise<void> {
        try {
            const existingDoc = await this.databaseService.database.get(updatedRegime._id);

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
            await this.databaseService.database.put(regimeToSave);

            this.getAllRegimes();
        } catch (error) {
            console.error('Error updating regime:', error);
        }
    }
}
