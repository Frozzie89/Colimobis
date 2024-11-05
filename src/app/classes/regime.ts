export class Regime {
    _id: string
    requestNumber: string
    ot: number
    rf: string
    label: string
    state: RegimeState

    constructor(id: string = '', requestNumber: string = '', ot: number = 0, rf: string = '', label: string = '', state: RegimeState = RegimeState.RETURNED_UNDONE) {
        this._id = id
        this.requestNumber = requestNumber
        this.ot = ot
        this.rf = rf
        this.label = label
        this.state = state
    }

    static fromJson(data: any): Regime {
        if (!data) {
            throw new Error("data is undefined");
        }

        return new Regime(
            data._id,
            data.requestNumber,
            data.ot,
            data.rf,
            data.label,
            data.state as RegimeState
        )
    }

    toString(): string {
        return `[Id = ${this._id}, RequestNumber = ${this.requestNumber}, Ot = ${this.ot}, Rf = ${this.rf}, Label = ${this.label}, State = ${this.state}]`
    }

}


export enum RegimeState {
    AUTHORIZED = 'AUTORISÉ',
    ERROR = 'ERREUR',
    RETURNED_UNDONE = 'RENDU NON-TERMINÉ',
    DEMARRE = 'DÉMARRÉ'
}
