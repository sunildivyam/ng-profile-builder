export class Project {
    name: string;
    clientName: string;
    from: Date;
    to: Date;
    summary: string;
    technologies: Array<string>;
    roles: Array<string>;
    
    constructor() {
        this.name = "";
        this.clientName = "";
        this.from = null;
        this.to = null;
        this.summary = "";
        this.technologies = new Array<string>();
        this.roles = new Array<string>();    
    }
}
