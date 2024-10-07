export class Regime {
    id: string
    requestNumber: string
    ot: number
    rf: string
    label: string

    constructor(id: string = '', requestNumber: string = '', ot: number = 0, rf: string = '', label: string) {
        this.id = id
        this.requestNumber = requestNumber
        this.ot = ot
        this.rf = rf
        this.label = label
    }

    toString(): string {
        return `[Id = ${this.id}, RequestNumber = ${this.requestNumber}, Ot = ${this.ot}, Rf = ${this.rf}, Label = ${this.label}]`
    }

}
