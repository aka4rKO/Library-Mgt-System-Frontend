import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reader } from '../models/reader.model';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  nextReaderId: string = "";

  constructor(private http: HttpClient) { }

  getReaderId() {
    return this.http.get('http://localhost:9000/readerid');
  }

  addReader(reader: Reader) {
    return this.http.post('http://localhost:9000/reader', reader);
  }

}
