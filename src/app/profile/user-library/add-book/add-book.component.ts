import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import Axios from 'axios'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() addBook: EventEmitter<any> = new EventEmitter();
  // @Input() bookSearch: EventEmitter<any> = new EventEmitter();
  title:string;
  private search: string;
  private apiSearch: string = 'https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/book/search/';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const book = {
      title: this.title,
      completed: false
    }
    this.addBook.emit(book);
  }

  async bookSearch(event: any) {
    let config = {
      headers: {
        'Authorization': "bearer " + await localStorage.getItem('bToken')
      }
    }
    this.search = event.target.value;
    const urlTitleSearch = this.search.split(' ').join('+').toLowerCase();
    const searchUrl = this.apiSearch + urlTitleSearch;
    console.log(searchUrl)
    Axios.get(searchUrl, config).then(
      (data) => {
      console.log(data.data.results)
      }
    )
  }
}

