import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BookInfo } from '../book-models/BookInfo';
import { BookService } from '../book-services/books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: BookInfo;
  @Output() deleteBook: EventEmitter<BookInfo> = new EventEmitter();

  constructor(private bookService:BookService) { }

  ngOnInit() {
  }

  onDelete(book) {
    this.deleteBook.emit(book);
  }
  //calls both addBookToLibrary(searchOL) and searchLibrary seperately
  //addBookToLibrary(searchOL) called in profile page to find the book in OL and then add it to user's library
  //searchLibrary called in map page to look for a book in our API
  //map search gets all book ids related to the search and passes them into a query with other nearby user's ids
}
