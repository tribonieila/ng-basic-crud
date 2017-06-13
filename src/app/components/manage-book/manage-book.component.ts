import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from './../../services/book';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent implements OnInit {
  books: Book[];
  book: Book = new Book();

  constructor(
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks().then(books => this.books = books);
  }

  updateBook(id:number){
    this.router.navigate(['/update-book', id]);
  }

  deleteBook(id:number){
    this.bookService.deleteBook(id);
  }

}
