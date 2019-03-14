export class Post {

    id: number;
    createdAt: Date;
    loveIts: number;
    constructor(public title: string, public content: string) {
        this.createdAt = new Date();
        this.loveIts = 0;
    }
}
