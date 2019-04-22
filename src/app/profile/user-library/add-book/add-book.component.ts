import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BookInfo, BookSearch } from '../book-models/BookInfo';
import { BookService } from '../book-services/books.service';


export let userBooks: BookInfo[]
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {  
  @Output() getLibrary: EventEmitter<any> = new EventEmitter();

  book: BookSearch = {
    title: '',
    authorName: ''
  };

  private bookFound: BookInfo;

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    let res = await this.bookService.getUserLibrary()
    userBooks = res.data
    localStorage.setItem('userBooks', JSON.stringify(userBooks))
    console.log(`AddBookComponent Init`)
  }

  async getBook() {
    let res = await this.bookService.searchOL(this.book);
    return res
  }

  async addBook() {
    try {
      let result = await this.getBook()
      this.bookFound = result.data
      let addBook = await this.bookService.addBookToLibrary(this.bookFound)
      userBooks = addBook.data
      console.log(userBooks)
      localStorage.setItem('userBooks', userBooks.join(','))
      alert(`${this.bookFound.title} was added to your library!`)
    } catch (e) {
      console.log(e);
    }
  }
}