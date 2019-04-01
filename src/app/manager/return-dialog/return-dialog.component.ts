import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LibraryItemService } from 'src/app/services/library-item.service';

@Component({
  selector: 'app-return-dialog',
  templateUrl: './return-dialog.component.html',
  styleUrls: ['./return-dialog.component.css']
})
export class ReturnDialogComponent implements OnInit {
  due: string;

  constructor(public dialogRef: MatDialogRef<ReturnDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private libItemService: LibraryItemService) { }

  ngOnInit() {
    console.log(this.data.isbn);
    this.libItemService.returnItem(this.data.isbn)
      .subscribe(
        (response) => {
          console.log(response);
          this.due = response.toString();
        }
      );
  }

  send() {
    
  }

}
