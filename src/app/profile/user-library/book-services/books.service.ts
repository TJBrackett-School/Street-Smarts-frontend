import {
  Injectable
} from '@angular/core';
import {
  BookInfo,
  BookSearch
} from '../book-models/BookInfo';
import Axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  //OpenLibrary API
  public openLibraryUrl: string = 'book/searchapi';
  public bookSearchUrl: string = 'book/search';
  //User's library API
  public userBookUrl: string = 'user/book';

  constructor() {}

  //Searches OpenLibrary for a book
  async searchOL(book: BookSearch) {
    const result = await Axios.post(this.openLibraryUrl, {
      title: book.title,
      author: book.author
    })
    return result
  }

  //Add book to user's library
  async addBookToLibrary(book: any) {
    const result = await Axios.post(this.userBookUrl, book)
    return result
  }

  //Search our API library for a book
  async searchLibrary() {
    const result = await Axios.post(this.userBookUrl)
    return result
  }
  //Pull all books in user's library
  async getUserLibrary() {
    const result = await Axios.get(this.userBookUrl)
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
