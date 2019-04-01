import { LibraryItem } from './library-item.model';
import { Actor } from './actor.model';

export class Dvd extends LibraryItem {

    private languages: string[];
    private subtitles: string[];
    private producer: string;
    private actors: Actor[];

    constructor(
        isbn: string,
        title: string,
        sector: string,
        publicationDate: Date,
        status: string,
        availableDate: Date,
        languages: string[],
        subtitles: string[],
        producer: string,
        actors: Actor[]
    ) {
        super(isbn, title, sector, publicationDate, status, availableDate);
        this.languages = languages;
        this.subtitles = subtitles;
        this.producer = producer;
        this.actors = actors;
    }

    //Getters
    public getLanguages() : string[] {
        return this.languages;
    }

    public getSubtitles() : string[] {
        return this.subtitles;
    }

    public getProducer() : string {
        return this.producer;
    }

    public getActors() : Actor[] {
        return this.actors;
    }

    //Setter
    public setLanguages(languages: string[]) {
        this.languages = languages;
    }

    public setSubtitles(subtitles: string[]) {
        this.subtitles = subtitles;
    }

    public setProducer(producer: string) {
        this.producer = producer;
    }

    public setActors(actors: Actor[]) {
        this.actors = actors;
    }

}