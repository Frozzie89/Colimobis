export class Regime {
    id: string
    requestNumber: string
    ot: number
    rf: string
    label: string
    state: RegimeState

    constructor(id: string = '', requestNumber: string = '', ot: number = 0, rf: string = '', label: string = '', state: RegimeState = RegimeState.RETURNED_UNDONE) {
        this.id = id
        this.requestNumber = requestNumber
        this.ot = ot
        this.rf = rf
        this.label = label
        this.state = state
    }

    toString(): string {
        return `[Id = ${this.id}, RequestNumber = ${this.requestNumber}, Ot = ${this.ot}, Rf = ${this.rf}, Label = ${this.label}, State = ${this.state}]`
    }

}


export enum RegimeState {
    AUTHORIZED = 'Autorisé',
    ERROR = 'Erreur',
    RETURNED_UNDONE = 'Rendu non-terminé'
}
