export class Post {

    id: number;
    createdAt: Date;

    constructor(public title: string, public content: string, public loveIts: number = 0) {
        this.createdAt = new Date();
    }
}
