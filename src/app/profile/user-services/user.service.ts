import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../user-models/UserInfo';
import Axios from 'axios';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
};
@Injectable({
    providedIn: 'root'
})

export class UserService {
    userUrl = 'https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/user/profile';
    addressUrl = 'https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/user/address';

    constructor (private http: HttpClient) { }

    async addUserAddress(locationObject) {
         const config = {
          headers: {
            'Authorization': 'bearer ' + await localStorage.getItem('bToken')
          }
        };
        await Axios.post(this.addressUrl, locationObject);
    }

    async getUserProfile() {
        const config = {
          headers: {
            'Authorization': 'bearer ' + await localStorage.getItem('bToken')
          }
        };
        const bodyParameters = {
          key: 'value'
        };
        try {
          const response = await Axios.get(this.userUrl, config);
          console.log(response);

        } catch (e) {
          console.log(e);
        }
      }

    getUser(): Observable<UserInfo[]> {
        return this.http.get<UserInfo[]>(this.userUrl);
    }

}
