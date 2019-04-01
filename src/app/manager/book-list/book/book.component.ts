import { Component, OnInit } from '@angular/core';
import { LibraryItemService } from 'src/app/services/library-item.service';
import { Book } from 'src/app/models/book.model';
import { MatDialog } from '@angular/material';
import { BorrowDialogComponent } from '../../borrow-dialog/borrow-dialog.component';
import { ReturnDialogComponent } from '../../return-dialog/return-dialog.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];

  constructor(private libItemService: LibraryItemService, public dialog: MatDialog, public returnDialog: MatDialog) { }

  ngOnInit() {
    this.libItemService.getBooks()
      .subscribe(
        (response: any) => {
          for(let i of response){
            this.books.push(i);
          }
        }
      );
  }

  onDelete(isbn: string) {
    console.log(isbn);
    this.libItemService.deleteItem(isbn)
      .subscribe(
        (response) => {
          console.log(response);
          this.books = [];
          this.ngOnInit();
        }
      );
  }

  openDialog(isbn: string) {
    console.log("open dialog "+isbn);
    const dialogRef = this.dialog.open(BorrowDialogComponent, {
      data: {
        isbn: isbn
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.books = [];
      this.ngOnInit();
    });
  }

  onReturn(isbn: string) {
    console.log("open return dialog "+isbn);
    const dialogRef = this.returnDialog.open(ReturnDialogComponent, {
      data: {
        isbn: isbn
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.books = [];
      this.ngOnInit();
    });
  }

}
