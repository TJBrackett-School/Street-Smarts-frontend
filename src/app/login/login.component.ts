import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser
} from 'amazon-cognito-identity-js/dist/amazon-cognito-identity.min';
import { config, CognitoIdentityCredentials } from '../../../node_modules/aws-sdk/dist/aws-sdk.min';
import { poolData } from 'src/models/poolData';
import { ASTWithSource } from '@angular/compiler';


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

  constructor() { }

  ngOnInit() {
  }

  onEmailChange(event: any) {
    this.email = event.target.value;
  }

  onUserPasswordChange(event: any) {
    this.userPassword = event.target.value;
  }

  loginUser() {

    const authenticationData = {
      Username : this.email,
      Password : this.userPassword
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userPool = new CognitoUserPool(poolData);
    const userData = {
      Username : this.email,
      Pool : userPool
    };

    console.log(authenticationDetails);
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        this.accessToken = result.getAccessToken().getJwtToken();

        this.idToken = result.idToken.jwtToken;
        console.log(cognitoUser.getUsername());

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
            // console.log('attribute ' + res[i].getName() + ' has value ' + res[i].getValue());
          }
          // console.log(res);

        });
      },

      onFailure: (err) => {
        console.log(err);
      }
    });



  }

}
