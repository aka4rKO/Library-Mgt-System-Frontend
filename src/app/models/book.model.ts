import { LibraryItem } from './library-item.model';
import { Author } from './author.model';

export class Book extends LibraryItem {

    private publisher: string;
    private authors: Author[];
    private numOfPages: number;

    constructor(
        isbn: string,
        title: string,
        sector: string,
        publicationDate: Date,
        status: string,
        availableDate: Date,
        publisher: string,
        authors: Author[],
        numOfPages: number
    ) {
        super(isbn, title, sector, publicationDate, status, availableDate);
        this.publisher = publisher;
        this.authors = authors;
        this.numOfPages = numOfPages;
    }

    //Getters
    public getPublisher() : string {
        return this.publisher;
    }

    public getAuthors() : Author[] {
        return this.authors;
    }

    public getNumOfPages() : number {
        return this.numOfPages;
    }

    //Setters
    public setPublisher(publisher: string) {
        this.publisher = publisher;
    }

    public setAuthors(authors: Author[]) {
        this.authors = authors;
    }

    public setNumOfPages(numOfPages: number) {
        this.numOfPages = numOfPages;
    }

}