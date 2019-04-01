import { Component, OnInit } from '@angular/core';
import { LibraryItemService } from 'src/app/services/library-item.service';

@Component({
  selector: 'app-dvd-list',
  templateUrl: './dvd-list.component.html',
  styleUrls: ['./dvd-list.component.css']
})
export class DvdListComponent implements OnInit {
  numOfDvds: number = 0;

  constructor(private libItemService: LibraryItemService) { }

  ngOnInit() {
    this.libItemService.getDvds()
      .subscribe(
        (response: any) => {
          this.numOfDvds = response.length;
        }
      );
  }

}
