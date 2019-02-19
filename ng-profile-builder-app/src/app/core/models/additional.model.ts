export class Additional {
    title:string;
    summary: string;
    bullets: Array<string>;

    constructor() {
        this.title = "";
        this.summary = "";
        this.bullets = new Array<string>();
    }
}