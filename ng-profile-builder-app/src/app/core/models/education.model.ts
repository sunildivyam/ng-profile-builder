export class Education {
    name: string;
    institution: string;    
    from: Date;
    to: Date;
    branch: string;


    constructor() {
        this.name = "";
        this.institution = "";
        this.from = null;
        this.to = null;
        this.branch = "";
    }
}