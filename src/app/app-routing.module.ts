import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { LoginComponent } from './login/login.component';
import { BookListComponent } from './manager/book-list/book-list.component';
import { DvdListComponent } from './manager/dvd-list/dvd-list.component';
import { AddItemComponent } from './manager/add-item/add-item.component';
import { AddReaderComponent } from './manager/add-reader/add-reader.component';
import { GenerateReportComponent } from './manager/generate-report/generate-report.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'manager', canActivate: [AuthGuard], component: ManagerComponent, children: [
    {path: 'books', component: BookListComponent},
    {path: 'dvds', component: DvdListComponent},
    {path: 'add-item', component: AddItemComponent},
    {path: 'add-reader', component: AddReaderComponent},
    {path: 'report', component: GenerateReportComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
