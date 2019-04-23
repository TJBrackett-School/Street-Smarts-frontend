import { Injectable } from '@angular/core';
import Axios from 'axios';
import { BookInfo, BookSearch } from 'src/app/profile/user-library/book-models/BookInfo';

@Injectable({
    providedIn: 'root'
})

export class MapService {
  // GET
  // /user/location
  //   - return signed in users location
  // /user/location/{userID}
  //   - returns user location by user ID
  public userLocationUrl: string = 'user/location';
  // Map search for users nearby that have a certain book
  // POST
  // /book/searchSB
  // - send {radius: num, bookData: {book}}
  // - getback {users: [list of users]}
  public searchUrl: string = 'book/searchSB';

  constructor () { }

  
  //Find user's nearby that have book
  async searchMapForBook(radius: number, book: BookSearch[]) {
    const results = await Axios.post(this.searchUrl, {
      radius: radius,
      bookData: {book}
    })
    return results
  }
  async getUserLocation(userID: number[]) {
    const results = await Axios.get(this.userLocationUrl + `/${userID}`)
    return results
  }


}