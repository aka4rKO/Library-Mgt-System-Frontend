export abstract class Person {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    //Getter
    public getName() : string {
        return this.name;
    }

    //Setter
    public setName(name: string) {
        this.name = name;
    }

}