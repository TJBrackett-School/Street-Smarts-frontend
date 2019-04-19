import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    userUrl: string = 'https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/user/profile';

    constructor (private http:HttpClient) { }

    async getUserProfile() {
        let config = {
          headers: {
            'Authorization': "bearer " + await localStorage.getItem('bToken')
          }
        }
        let bodyParameters = {
          key: "value"
        }
        try {
          const response = await Axios.get(this.userUrl, config);
          console.log(response)
    
        } catch (e) {
          console.log(e)
        }
      }

    getUser():Observable<UserInfo[]> {
        return this.http.get<UserInfo[]>(this.userUrl);
    }   

}