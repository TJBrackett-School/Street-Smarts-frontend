import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from 'amazon-cognito-identity-js/dist/amazon-cognito-identity.min';
import { poolData } from 'src/models/poolData';
import { Router } from '@angular/router';
import Axios from 'axios';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private email;
  private userPassword;
  private accessToken;
  private idToken;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEmailChange(event: any) {
    this.email = event.target.value;
  }

  onUserPasswordChange(event: any) {
    this.userPassword = event.target.value;
  }

  async loginUser() {

    const authenticationData = {
      Username: this.email,
      Password: this.userPassword
    };

    const authenticationDetails: AuthenticationDetails = new AuthenticationDetails(authenticationData);
    const userPool: CognitoUserPool = new CognitoUserPool(poolData);
    const userData = {
      Username: this.email,
      Pool: userPool
    };

    console.log(authenticationDetails);
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: async (result) => {
        this.accessToken = result.getAccessToken().getJwtToken();
        this.idToken = result.idToken.jwtToken;
       localStorage.setItem('bToken', this.idToken);
        console.log(cognitoUser.getUsername());
        console.log(this.idToken);
      try {
        const res = await Axios.post('user/register', {});
        await Axios.post('user/address',
          JSON.parse(localStorage.getItem('locationData'))).then( //try to put config back
          (result) => {
            console.log(result);
          });
        console.log(res);
      } catch (e) {
        console.log(e);
      }

        cognitoUser.getUserAttributes(function (err, res) {
          if (err) {
            alert(err);
            return;
          }
          for (let i = 0; i < res.length; i++) {
            if (res[i].getName() === 'email') {
              console.log(res[i]);
              break;
            }
          }
        });
        this.router.navigate(['/library']);
      },

      onFailure: (err) => {
        alert('authentication error');
        console.log(err);
      }
    });



  }
}
