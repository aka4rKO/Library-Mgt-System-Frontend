import { Person } from './person.model';

export class Actor extends Person {

    private actorId: number;

    constructor(name: string) {
        super(name);
    }

    //Getter
    public getActorId() : number {
        return this.actorId;
    }

    //Setter
    public setActorId(actorId: number) {
        this.actorId = actorId;
    }

}