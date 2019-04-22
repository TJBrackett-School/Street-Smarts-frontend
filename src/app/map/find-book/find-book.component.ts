import { Component, OnInit } from '@angular/core';
import { BookSearch } from 'src/app/profile/user-library/book-models/BookInfo';
import { MapSearch, LatAndLng } from '../map-models/MapInfo';

@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.scss']
})
export class FindBookComponent implements OnInit {
  book: BookSearch = {
    title: '',
    author: ''
  }
  constructor() { }

  ngOnInit() {
  }
  //find book in db, then find users who have the book and get their location
}
