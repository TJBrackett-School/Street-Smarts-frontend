import { Component, OnInit } from '@angular/core';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js/dist/amazon-cognito-identity.min';
import { poolData } from 'src/models/poolData';
import { CognitoUser } from 'amazon-cognito-identity-js';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private userName;
  private userEmail;
  private userPassWord;
  private userRepeatPassWord;
  private address;
  private birthday;


  constructor() {}


  ngOnInit() {}

  onUserNameChange(event: any) {
    this.userName = event.target.value;
    // console.log(this.userName);
  }

  onAddressChange(event: any) {
    this.address = event.target.value;
  }

  onBirthdayChange(event: any) {
    this.birthday = event.target.value;
  }

  onEmailChange(event: any) {
    this.userEmail = event.target.value;
  }

  onPassChange(event: any) {
    this.userPassWord = event.target.value;
    // console.log(this.passWord);
  }

  onRepeatPassChange(event: any) {
    this.userRepeatPassWord = event.target.value;
  }


  registerUser() {
    if (this.userPassWord === this.userRepeatPassWord) {

      const userPool = new CognitoUserPool(poolData);

      const attributeList = [];


      const data = [
      {
        Name: 'email',
        Value: this.userEmail
      },
      {
        Name: 'name',
        Value: this.userName
      },
      {
        Name: 'address',
        Value: this.address
      },
      {
        Name: 'birthdate',
        Value: this.birthday
      }
    ];

      // const nameData = {
      //   Name: 'name',
      //   Value: this.userName
      // };

      // const addressData = {
      //   Name: 'address',
      //   Value: this.address
      // };

      // const birthdayData = {
      //   Name: 'birthdate',
      //   Value: this.birthday
      // };

      let cognitoUser: CognitoUser;
      for (const attribute of data) {
        const newAttribute = new CognitoUserAttribute(attribute);
        attributeList.push(newAttribute);
        }

      userPool.signUp(this.userEmail, this.userPassWord, attributeList, null, function (err, result) {
        if (err) {
          alert(err);
          console.log(err);
          console.log(`${err} in Signup Process`);
          return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
      });


    } else {
      alert('Repeated password doesnt match');
      console.log(this.userPassWord + ' : ' + this.userRepeatPassWord);
    }
  }

}
