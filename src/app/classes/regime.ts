export class Regime {
    id: string
    requestNumber: string
    ot: number
    rf: string
    label: string
    state: regimeState

    constructor(id: string = '', requestNumber: string = '', ot: number = 0, rf: string = '', label: string = '', state: regimeState = regimeState.RENDU_NON_TERMINE) {
        this.id = id
        this.requestNumber = requestNumber
        this.ot = ot
        this.rf = rf
        this.label = label
        this.state = state
    }

    toString(): string {
        return `[Id = ${this.id}, RequestNumber = ${this.requestNumber}, Ot = ${this.ot}, Rf = ${this.rf}, Label = ${this.label}]`
    }

}


export enum regimeState {
    AUTORISE, ERREUR, RENDU_NON_TERMINE
}
