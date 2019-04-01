import { Person } from './person.model';

export class Author extends Person {

    private authorId: number;

    constructor(name: string) {
        super(name);
    }

    //Getter
    public getAuthorId() : number {
        return this.authorId;
    }

    //Setter
    public setAuthorId(authorId: number) {
        this.authorId = authorId;
    }

}