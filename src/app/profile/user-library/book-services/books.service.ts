import { Injectable } from '@angular/core';
import { BookInfo, BookSearch } from '../book-models/BookInfo';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // OpenLibrary API
  // POST
  // /book/searchapi
  //   - send {title?: "", author?: "", ISBN}
  //   - get book
  public openLibraryUrl = 'book/searchapi';
  // Search all books in our API
  // POST
  // /book/search
  //   - send {title?: "", author?: "", ISBN}
  //   - get book
  public bookSearchUrl = 'book/search';
  // GET
  // /user/book
  // - returns signed in users books
  // /user/book/{userID}
  // -returns signed in users books by userID
  // DEL
  // /user/book/{bookID}
  //   - deletes user books & returns list of users books after deletion
  public userBookUrl = 'user/book';


  constructor() {}

  // Searches OpenLibrary for a book
  async searchOL(book: BookSearch) {
    const result = await Axios.post(this.openLibraryUrl, {
      title: book.title,
      authorName: book.authorName
    });
    return result;
  }

  // Add book to user's library
  async addBookToLibrary(book: BookInfo) {
    const result = await Axios.post(this.userBookUrl, book);
    return result;
  }

  // Search our API library for a book
  async searchLibrary(book: BookSearch) {
    let result;
    // const result = await Axios.post(this.bookSearchUrl)
    if (book.title) {
      result = await Axios.post(this.bookSearchUrl, {
        title: book.title
      });
    } else {
      result = await Axios.post(this.bookSearchUrl, {
        authorName: book.authorName
      });
    }
    return result;
  }
  // Pull all books in user's library
  async getUserLibrary() {
    const result = await Axios.get(this.userBookUrl);
    return result;
  }

  // Remove book from library
  async deleteBook(book: BookInfo) {
    const result = await Axios.delete(`${this.userBookUrl}/${book.id}`);
    return result;
  }
}
