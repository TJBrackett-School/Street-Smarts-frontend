import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookInfo } from '../../models/BookInfo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http:HttpClient) { }

  getBooks():Observable<BookInfo[]> {
    return this.http.get<BookInfo[]>(this.bookUrl);
  }

  deleteBook(book:BookInfo):Observable<BookInfo> {
    const url = `${this.bookUrl}/${book.id}`;
    return this.http.delete<BookInfo>(url, httpOptions);
  }

  addBook(book:BookInfo):Observable<BookInfo> {
    return this.http.post<BookInfo>(this.bookUrl, book, httpOptions);
  }
}
