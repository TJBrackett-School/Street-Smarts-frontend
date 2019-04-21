import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import Axios from 'axios'
import { BookInfo, BookSearch } from '../book-models/BookInfo';
import { BookService } from '../book-services/books.service';

const config = {
  headers: {
    'Authorization': "bearer " + localStorage.getItem('bToken')
  }
}
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  //going to be purely for retrieving data and moving data to book-items
  
  // @Output() addBook: EventEmitter<any> = new EventEmitter();
  // @Input() bookSearch: EventEmitter<any> = new EventEmitter();

  book: BookSearch = {
    title: '',
    author: ''
  };

  private bookFound;
  private apiSearch: string = 'book/search/';

  
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  async getBook() {
    let res = await this.bookService.searchOL(this.book);
    console.log(res)
    console.log(this.book)
    return res
  }

  async addBook() {
    this.bookFound = await this.getBook()
    console.log(this.bookFound)
    console.log(this.bookFound.data.title)
    let addBook = await this.bookService.addBookToLibrary(this.bookFound)
    console.log(addBook)
  }


  // async onSubmit(event: any) {
  //   const book = await this.bookSearch()
  //   console.log('onsubmit', book)
  //   this.addBook.emit(book);
  // }
  // onSearchChange(event){
  //   this.search = event.target.value
  // }

  // searchBook(book: BookInfo) {
  //   Axios.post('https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/user/book', book, this.config).then(res=> this.addBook.emit(res.data))
  // }

  // async bookSearch() {
  //   const urlTitleSearch = this.search.split(' ').join('+').toLowerCase();
  //   const searchUrl = 'https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/book/search/' + urlTitleSearch;
  //   console.log("Got Here", searchUrl)
  //   let results = await Axios.get(searchUrl, this.config)
  //   return results.data;
  // }
}

