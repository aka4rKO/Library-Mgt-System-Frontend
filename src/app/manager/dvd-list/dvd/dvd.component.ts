import { Component, OnInit } from '@angular/core';
import { LibraryItemService } from 'src/app/services/library-item.service';
import { Dvd } from 'src/app/models/dvd.model';
import { DvdListComponent } from '../dvd-list.component';
import { MatDialog } from '@angular/material';
import { BorrowDialogComponent } from '../../borrow-dialog/borrow-dialog.component';
import { ReturnDialogComponent } from '../../return-dialog/return-dialog.component';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {
  dvds: Dvd[] = [];

  constructor(private libItemService: LibraryItemService, public dialog: MatDialog, public returnDialog: MatDialog) { }

  ngOnInit() {
    this.libItemService.getDvds()
      .subscribe(
        (response: any) => {
          for(let i of response){
            this.dvds.push(i);
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
          this.dvds = [];
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
      this.dvds = [];
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
      this.dvds = [];
      this.ngOnInit();
    });
  }

}
