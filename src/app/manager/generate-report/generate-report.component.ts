import { Component, OnInit } from '@angular/core';
import { LibraryItemService } from 'src/app/services/library-item.service';
import { Reader } from 'src/app/models/reader.model';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {
  displayedColumns: string[] = ['isbn', 'itemTitle', 'overdue'];
  dataSource = [];
  overdueItems = [];

  constructor(private libItemService: LibraryItemService) { }

  ngOnInit() {
    this.libItemService.generateReport()
      .subscribe(
        (response: any) => {
          for(let res of response) {
            this.overdueItems.push(res);
          }
          console.log(this.overdueItems);
          this.dataSource = this.overdueItems;
        }
      );
  }

}
