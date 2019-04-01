import { DateTime } from './date-time.model';
import { Reader } from './reader.model';

export abstract class LibraryItem {

    private isbn: string;
    private title: string;
    private sector: string;
    private publicationDate: Date;
    private borrowedDateTime: DateTime;
    private currentReader: Reader; 
    private status: string;
    private reservedReaders: Reader[];
    private availableDate: Date;

    constructor(
        isbn: string,
        title: string,
        sector: string,
        publicationDate: Date,
        status: string,
        availableDate: Date
    ) {
        this.isbn = isbn;
        this.title = title;
        this.sector = sector;
        this.publicationDate = publicationDate;
        this.status = status;
        this.availableDate = availableDate;
    }

    //Getters
    public getIsbn() : string {
        return this.isbn;
    }

    public getTitle() : string {
        return this.title;
    }

    public getSector() : string {
        return this.sector;
    }

    public getPublicationDate() : Date {
        return this.publicationDate;
    }

    public getBorrowedDateTime() : DateTime {
        return this.borrowedDateTime;
    }

    public getCurrentReader() : Reader {
        return this.currentReader;
    }

    public getStatus() : string {
        return this.status;
    }

    public getReservedReaders() : Reader[] {
        return this.reservedReaders;
    }

    public getAvailableDate() : Date {
        return this.availableDate;
    }

    //Setters
    public setIsbn(isbn: string) {
        this.isbn = isbn;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public setSector(sector: string) {
        this.sector = sector;
    }

    public setPublicationDate(publicationDate: Date) {
        this.publicationDate =this.publicationDate;
    }

    public setBorrowedDateTime(borrowedDateTime: DateTime) {
        this.borrowedDateTime = borrowedDateTime;
    }

    public setCurrentReader(currentReader: Reader) {
        this.currentReader = currentReader;
    }

    public setStatus(status: string) {
        this.status = status;
    }

    public setReservedReaders(reservedReaders: Reader[]) {
        this.reservedReaders = reservedReaders;
    }

    public setReservedReader(reservedReader: Reader) {
        this.reservedReaders.push(reservedReader);
    }

    public setAvailableDate(availableDate: Date) {
        this.availableDate = availableDate;
    }

}