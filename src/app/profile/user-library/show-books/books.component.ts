import { Component, OnInit } from '@angular/core';
import { BookInfo } from '../../models/BookInfo';
import { BookService } from '../../services/book-services/books.service'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:BookInfo[];

  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  deleteBook(book:BookInfo) {
    this.books = this.books.filter(b => b.id !== book.id);
    this.bookService.deleteBook(book).subscribe();
  }

  addBook(book:BookInfo) {
    this.bookService.addBook(book).subscribe(book => {
      this.books.push(book);
    });
  }
}