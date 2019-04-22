import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { BookInfo } from '../profile/user-library/book-models/BookInfo';
import { userBooks } from '../profile/user-library/add-book/add-book.component';
import { BookService } from '../profile/user-library/book-services/books.service';

@Component({
  selector: 'app-test-book-item',
  templateUrl: './test-book-item.component.html',
  styleUrls: ['./test-book-item.component.scss']
})
export class TestBookItemComponent implements OnInit {
  @Input() book: BookInfo;
  @Output() deleteBook: EventEmitter<BookInfo> = new EventEmitter();
  private library: BookInfo[] = JSON.parse(localStorage.getItem('userBooks'));

  constructor(private bookService:BookService) { }

  ngOnInit() {
    console.log(this.library)
    console.log(`got here`);
    
  }

  onDelete(book) {
    this.deleteBook.emit(book);
  }

}
