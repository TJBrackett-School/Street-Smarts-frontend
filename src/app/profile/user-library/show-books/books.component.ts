import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BookInfo } from '../book-models/BookInfo';
import { BookService } from '../book-services/books.service';
import { UserService } from '../../user-services/user.service';
import Axios from 'axios';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Output() addBook: EventEmitter<any> = new EventEmitter();
  public books:BookInfo[];
  private config = {
      headers: {
        'Authorization': "bearer " + localStorage.getItem('bToken')
      }
    }
  constructor(private bookService:BookService, private userService:UserService) { }

  ngOnInit() {
    let config = {
      headers: {
        'Authorization': "bearer " + localStorage.getItem('bToken')
      }
    }
    Axios.get('https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/user/book', this.config).then(books => {
      if (books.data.title) {
        this.books = books.data;
      }
    });
  }

  // deleteBook(book:BookInfo) {
  //   this.books = this.books.filter(b => b.id !== book.id);
  //   this.bookService.deleteBook(book).subscribe();
  // }
  async searchBook(book: BookInfo) {
    console.log(book)
    const res = await Axios.post('https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/user/book', book, this.config)
    console.log(res)
  }
    async getUserProfile() {
    let config = {
      headers: {
        'Authorization': "bearer " + await localStorage.getItem('bToken')
      }
    }
   try {
      const {data} = await Axios.get("https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/user/profile", config)
      console.log(data.user)

    } catch (e) {
      console.log(e)
    }
  }
}