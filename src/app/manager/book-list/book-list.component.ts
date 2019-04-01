import { Component, OnInit } from '@angular/core';
import { LibraryItemService } from 'src/app/services/library-item.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  numOfBooks : number = 0;

  constructor(private libItemService: LibraryItemService) { }

  ngOnInit() {
    this.libItemService.getBooks()
      .subscribe(
        (response: any) => {
          this.numOfBooks = response.length;
        }
      );
  }

}
