import { Component, OnInit } from '@angular/core';
import { BookInfo } from '../book-models/BookInfo';
import { UserInfo } from '../../user-models/UserInfo'
import { BookService } from '../book-services/books.service';
import { UserService } from '../../user-services/user.service';
import Axios from 'axios';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:BookInfo[];

  constructor(private bookService:BookService, private userService:UserService) { }

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