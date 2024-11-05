import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb'

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    private _database!: PouchDB.Database;

    public get database(): PouchDB.Database {
        return this._database;
    }
    public set database(value: PouchDB.Database) {
        this._database = value;
    }

    constructor() {
        this.initDB()
    }

    initDB() {
        this.database = new PouchDB('colimobis')
    }
}
