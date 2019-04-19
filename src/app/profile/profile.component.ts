import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Output() addBook: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    const book = {
      title: this.title,
      completed: false
    };
    this.addBook.emit(book);
  }

  async getUserProfile() {
    const config = {
      headers: {
        'Authorization': 'bearer ' + await localStorage.getItem('bToken')
      }
    };
   try {
      const {data} = await Axios.get('https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/user/profile', config);
      console.log('this is the data', data);

    } catch (e) {
      console.log(e);
    }
  }

}
