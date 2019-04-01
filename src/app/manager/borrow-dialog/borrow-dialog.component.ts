import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { LibraryItemService } from 'src/app/services/library-item.service';

@Component({
  selector: 'app-borrow-dialog',
  templateUrl: './borrow-dialog.component.html',
  styleUrls: ['./borrow-dialog.component.css']
})
export class BorrowDialogComponent implements OnInit {
  borrowForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<BorrowDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private libItemService: LibraryItemService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.borrowForm = new FormGroup({
      'readerId': new FormControl(null)
    });
  }

  onBorrow() {
    console.log(this.borrowForm.get('readerId').value);
    console.log(this.data.isbn);
    this.libItemService.borrowItem(this.data.isbn, this.borrowForm.get('readerId').value)
      .subscribe(
        (response) => {
          console.log(response);
          if(response == "invalid") {
            this.snackBar.open("Reader ID doesn't exist!", 'Undo', {
              duration: 3000
            });
          }else{
            console.log("item borrowed");
            this.dialogRef.close();
          }
        }
      );
  }

}
