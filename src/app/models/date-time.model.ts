export class DateTime {

    private date: number;
    private month: number;
    private year: number;
    private hour: number;
    private minute: number;

    constructor(
        date: number,
        month: number,
        year: number,
        hour: number,
        minute: number 
    ) {
        this.date = date;
        this.month = month;
        this.year = year;
        this.hour = hour;
        this.minute = minute;
    }

    //Getters
    public getDate() : number {
        return this.date;
    }

    public getMonth() : number {
        return this.month;
    }

    public getYear() : number {
        return this.year;
    }

    public getHour() : number {
        return this.hour;
    }

    public getMinute() : number {
        return this.minute;
    }

    //Setters
    public setDate(date: number) {
        this.date = date;
    }

    public setMonth(month: number) {
        this.month = month;
    }

    public setYear(year: number) {
        this.year = year;
    }

    public setHour(hour: number) {
        this.hour = hour;
    }

    public setMinute(minute: number) {
        this.minute = minute;
    }

}