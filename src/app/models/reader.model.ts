import { Person } from './person.model';

export class Reader extends Person {

    private readerId: string;
    private email: string;
    private phoneNumber: string;

    constructor(
        name: string,
        readerId: string,
        email: string,
        phoneNumber: string
    ) {
        super(name);
        this.readerId = readerId;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    //Getters
    public getReaderId() : string {
        return this.readerId;
    }
        
    public getEmail() : string {
        return this.email;
    }

    public getPhoneNumber() : string {
        return this.phoneNumber;
    }

    //Setters
    public setReaderId(readerId: string) {
        this.readerId = readerId;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

}