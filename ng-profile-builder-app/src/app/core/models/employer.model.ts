export class Employer {
    employerName: string;
    from: Date;
    to: Date;
    designation: string;
    address: string;
    summary: string;
    roles: Array<string>; 

    constructor () {
        this.employerName = "";
        this.from = null;
        this.to = null;
        this.designation = "";
        this.address = "";
        this.summary = "";
        this.roles = new Array<string>();
    }
}