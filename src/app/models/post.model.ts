export class Post {

    createdAt: string;
    loveIts: number;
    constructor(public title: string, public content: string) {
        this.loveIts = 0;
    }
}
