import { Component, OnInit } from '@angular/core';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser
} from 'amazon-cognito-identity-js/dist/amazon-cognito-identity.min';
import { poolData } from 'src/models/poolData';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private userName;
  private userPassword;
  private accessToken;
  private idToken;

  constructor() { }

  ngOnInit() {
  }

  onUserNameChange(event: any){
    this.userName = event.target.value;
  }

  onUserPasswordChange(event: any){
    this.userPassword = event.target.value;
  }

  loginUser(){

    const authenticationData = {
      Username : this.userName,
      Password : this.userPassword
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userPool = new CognitoUserPool(poolData)
    const userData = {
      Username : this.userName,
      Pool : userPool
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        this.accessToken = result.getAccessToken().getJwtToken();

        this.idToken = result.idToken.jwtToken
        console.log(cognitoUser.getUsername())
      },

      onFailure: (err) => {
        console.log(err)
      }
    })

  }
}
