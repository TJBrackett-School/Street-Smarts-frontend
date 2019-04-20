import { Injectable} from '@angular/core';
import { BookInfo } from '../book-models/BookInfo';
import Axios from 'axios'

const config = {
  headers: {
    'Authorization': "bearer " + localStorage.getItem('bToken')
  }
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  //OpenLibrary API
  public bookSearchUrl: string = 'https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/book/search/';
  //User's library API
  public userBookUrl: string = 'https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/user/book';

  constructor() {}

  //Searches OpenLibrary for a book
  async searchOL() {
    const result = await Axios.get(this.bookSearchUrl, config)
    return result
  }

  //Add book to user's library
  async addBookToLibrary(book: BookInfo) {
    const result = await Axios.post(this.userBookUrl, book, config)
    return result
  }

  //Pull all books in user's library
  async getUserLibrary() {
    const result = await Axios.get(this.userBookUrl, config)
    return result
  }

  //Find user's nearby that have book
  async searchMapForBook() {
    //TODO
  }
  //Remove book from library
  async deleteBook() {
    //TODO
  }
  //Check out a user's book to another user.
  async checkoutBook() {
    //TODO
  }
  //Return a book that was checked out
  async returnCheckoutBook() {
    //TODO
  }


}
