import { Component, OnInit } from '@angular/core';
import { BookSearch, BookInfo } from 'src/app/profile/user-library/book-models/BookInfo';
import { MapSearch, LatAndLng } from '../map-models/MapInfo';
import { MapService } from '../map-services/map.service';
import { BookService } from 'src/app/profile/user-library/book-services/books.service';
import { UserService } from 'src/app/profile/user-services/user.service';
import { UserID } from 'src/app/profile/user-models/UserInfo';

@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.scss']
})
export class FindBookComponent implements OnInit {
  book: BookSearch = {
    title: '',
    authorName: ''
  }
  radius: number;
  userBooks: BookSearch[]
  searchOptions: string
  userSearch: string
  userID: UserID[]
  constructor(
    private bookService:BookService,
    private mapService:MapService,
    private userService:UserService
  ) { }

  ngOnInit() {
  }
  //Returns book info, use id to find users
  async getBook() {
    if (this.searchOptions == "title") {
      this.book.title = this.userSearch
      this.book.authorName = ''
    } else {
      this.book.authorName = this.userSearch
      this.book.title = ''
    }
    let books = await this.bookService.searchLibrary(this.book);
    return books
  }

  async getLocations() {
    let bookResults = await this.getBook()
    this.userBooks = bookResults.data
    let users = await this.mapService.searchMapForBook(
      this.radius, 
      this.userBooks
    )
    console.log(users.data.users[0])
    return users.data.users[0]
  }

  async getUsers() {
    this.userID = await this.getLocations()
    console.log(this.userID)
    let results = await this.mapService.getUserLocation(this.userID)
    console.log(results)
  }
}