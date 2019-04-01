import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ManagerComponent } from './manager/manager.component';
import { LoginComponent } from './login/login.component';
import { BookListComponent } from './manager/book-list/book-list.component';
import { BookComponent } from './manager/book-list/book/book.component';
import { DvdListComponent } from './manager/dvd-list/dvd-list.component';
import { DvdComponent } from './manager/dvd-list/dvd/dvd.component';
import { AddItemComponent } from './manager/add-item/add-item.component';
import { AddReaderComponent } from './manager/add-reader/add-reader.component';
import { GenerateReportComponent } from './manager/generate-report/generate-report.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { BorrowDialogComponent } from './manager/borrow-dialog/borrow-dialog.component';
import { ReturnDialogComponent } from './manager/return-dialog/return-dialog.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    LoginComponent,
    BookListComponent,
    BookComponent,
    DvdListComponent,
    DvdComponent,
    AddItemComponent,
    AddReaderComponent,
    GenerateReportComponent,
    BorrowDialogComponent,
    ReturnDialogComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  entryComponents: [
    BorrowDialogComponent,
    ReturnDialogComponent
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
