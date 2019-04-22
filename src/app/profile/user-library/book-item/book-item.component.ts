import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BookInfo } from '../book-models/BookInfo';
import { BookService } from '../book-services/books.service';
import { userBooks } from '../add-book/add-book.component';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: BookInfo;
  @Output() deleteBook: EventEmitter<BookInfo> = new EventEmitter();
  private library: BookInfo[] = userBooks;

  constructor(private bookService:BookService) { }

  ngOnInit() {
    console.log(this.library)
  }

  onDelete(book) {
    this.deleteBook.emit(book);
  }
}
