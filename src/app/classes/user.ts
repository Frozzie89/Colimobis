export class User {
    badgeNumber: string;
    nni: string;
    password: string;

    constructor(badgeNumber: string, nni: string, password: string) {
        this.badgeNumber = badgeNumber;
        this.nni = nni;
        this.password = password;
    }

    toString(): string {
        return `[BadgeNumber = ${this.badgeNumber}, NNI = ${this.nni}, Password = ${this.password}]`
    }

}
