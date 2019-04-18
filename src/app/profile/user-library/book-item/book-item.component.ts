import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BookInfo } from 'src/app/models/BookInfo';
import { BookService } from '../../services/book-services/books.service';

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
}
