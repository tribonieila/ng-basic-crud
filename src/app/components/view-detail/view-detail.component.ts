import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Book } from './../../services/book';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  book: Book = new Book();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.bookService.getBook(+params['id']))
    .subscribe(book => this.book = book);
  }

  goBack(){
    this.location.back();
  }

  updateBook(id:number){
    this.router.navigate(['/update-book',id]);
  }

}
