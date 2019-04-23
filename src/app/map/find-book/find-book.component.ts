import { Component, OnInit } from '@angular/core';
import { BookSearch, BookInfo } from 'src/app/profile/user-library/book-models/BookInfo';
import { MapSearch, LatAndLng } from '../map-models/MapInfo';
import { MapService } from '../map-services/map.service';
import { BookService } from 'src/app/profile/user-library/book-services/books.service';
import { UserService } from 'src/app/profile/user-services/user.service';

@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.scss']
})
export class FindBookComponent implements OnInit {
  book: BookSearch = {
    title: '',
    authorName: ''
  };
  radius: number;
  userBooks: BookSearch[];
  searchOptions: string;
  userSearch: string;

  constructor(
    private bookService: BookService,
    private mapService: MapService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }
  // Returns book info, use id to find users
  async getBook() {
    if (this.searchOptions === 'title') {
      this.book.title = this.userSearch;
      this.book.authorName = '';
    } else {
      this.book.authorName = this.userSearch;
      this.book.title = '';
    }
    console.log(this.book);
    const books = await this.bookService.searchLibrary(this.book);
    console.log(books);
    return books;
  }

  async getUsers() {
    let userIDs = await this.getLocations();
    console.log('UserIDs', userIDs);
    const results = [];
    userIDs.forEach(async user => {
      results.push(await this.mapService.getUserLocation(user.ownedby));
    });
    console.log('results', results);

  }

  async getLocations() {
    const bookResults = await this.getBook();
    this.userBooks = bookResults.data;
    const users = await this.mapService.searchMapForBook(
      this.radius,
      this.userBooks
    );
    console.log(users);
    return users.data.users[0];
  }
}
