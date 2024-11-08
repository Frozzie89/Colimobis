import { RegimeState } from "./regime"

export class Audit {
    _id: string
    date: Date
    regimeId: string
    stateBefore: RegimeState
    stateCurrent: RegimeState

    constructor(id: string = '', date: Date = new Date(), regimeId: string = '', stateBefore: RegimeState = RegimeState.RETURNED_UNDONE, stateCurrent: RegimeState = RegimeState.RETURNED_UNDONE) {
        this._id = id
        this.date = date
        this.regimeId = regimeId
        this.stateBefore = stateBefore
        this.stateCurrent = stateCurrent
    }

    static fromJson(data: any): Audit {
        if (!data) {
            throw new Error("data is undefined");
        }

        return new Audit(
            data._id,
            data.date,
            data.regimeId,
            data.stateBefore as RegimeState,
            data.stateCurrent as RegimeState
        )
    }

    toString(): string {
        return `[Id = ${this._id}, Date = ${this.date}, RegimeId = ${this.regimeId}, StateBefore = ${this.stateBefore}, StateCurrent = ${this.stateCurrent}]`
    }

}
