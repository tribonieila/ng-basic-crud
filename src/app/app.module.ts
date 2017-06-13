import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ManageBookComponent } from './components/manage-book/manage-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { BookService } from './services/book.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewDetailComponent,
    AddBookComponent,
    ManageBookComponent,
    PageNotFoundComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'view-detail/:id',
        component: ViewDetailComponent
      },
      {
        path: 'add-book',
        component: AddBookComponent
      },
      {
        path: 'manage-book',
        component: ManageBookComponent
      },
      {
        path: 'update-book/:id',
        component: UpdateBookComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }

    ])
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
