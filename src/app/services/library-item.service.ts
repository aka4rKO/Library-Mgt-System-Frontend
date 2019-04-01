import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Dvd } from '../models/dvd.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryItemService {

  constructor(private http: HttpClient) { }

  addBook(book: Book) {
    return this.http.post('http://localhost:9000/book', book);
  }

  addDvd(dvd: Dvd) {
    return this.http.post('http://localhost:9000/dvd', dvd);
  }

  getBooks() {
    return this.http.get('http://localhost:9000/books');
  }

  getDvds() {
    return this.http.get('http://localhost:9000/dvds');
  }

  deleteItem(isbn: string) {
    console.log("from service "+ isbn)
    return this.http.post('http://localhost:9000/delete', isbn);
  }

  borrowItem(isbn: string, readerId: string) {
    let obj = {
      isbn,
      readerId
    };
    console.log(obj);
    return this.http.post('http://localhost:9000/borrow', obj);
  }

  returnItem(isbn: string) {
    console.log("inside the service "+isbn);
    return this.http.post('http://localhost:9000/return', isbn);
  }

  generateReport() {
    return this.http.get('http://localhost:9000/report');
  }

}
