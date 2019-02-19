export class Skill {    
    name: string;
    from: Date;
    to: Date;
    rating: number;
    summary: string;

    constructor () {        
        this.name = "";
        this.from = null;
        this.to = null;
        this.rating = 0;
        this.summary = "";
    }
}