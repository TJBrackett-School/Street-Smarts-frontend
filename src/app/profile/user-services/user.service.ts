import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfo } from '../user-models/UserInfo';
import Axios from 'axios';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}
@Injectable({
    providedIn: 'root'
})

export class UserService {
  // GET
  // /user/profile
  //   - return Signed it user
  // /user/profile/{userID}
  //   - returns user by userid
  public userProfileUrl: string = 'user/profile';
  // POST
  // /user/checkout/{userID}
  //   - send {book}
  //   - get back message saying it completed
  public userCheckoutUrl: string = 'user/checkout';

    constructor (private http:HttpClient) { }

  async getUserByID (userID: number) {

  }
  //Check out a user's book to another user.
  async checkoutBook() {
    
  }
  //Return a book that was checked out
  async returnCheckoutBook() {
    //TODO
  }
}