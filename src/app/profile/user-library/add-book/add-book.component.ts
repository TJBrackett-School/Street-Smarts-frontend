import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import Axios from 'axios'
import { BookInfo } from '../book-models/BookInfo';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() addBook: EventEmitter<any> = new EventEmitter();
  
  // @Input() bookSearch: EventEmitter<any> = new EventEmitter();
  title:string;
  search:string;
  private apiSearch: string;
    private config = {
      headers: {
        'Authorization': "bearer " + localStorage.getItem('bToken')
      }
    }
  constructor() { }

  ngOnInit() {
    this.apiSearch = 'https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/book/search/';
  }

  async onSubmit(event: any) {
    const book = await this.bookSearch()
    console.log('onsubmit', book)
    this.addBook.emit(book);
  }
  onSearchChange(event){
    this.search = event.target.value
  }

  searchBook(book: BookInfo) {
    Axios.post('https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/user/book', book, this.config).then(res=> this.addBook.emit(res.data))
  }

  async bookSearch() {
    const urlTitleSearch = this.search.split(' ').join('+').toLowerCase();
    const searchUrl = 'https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/book/search/' + urlTitleSearch;
    console.log("Got Here", searchUrl)
    let results = await Axios.get(searchUrl, this.config)
    return results.data;
  }
}

