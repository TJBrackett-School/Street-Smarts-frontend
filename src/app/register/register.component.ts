import {
  Component,
  OnInit
} from '@angular/core';
import {
  CognitoUserPool,
  CognitoUserAttribute
} from 'amazon-cognito-identity-js/dist/amazon-cognito-identity.min';
import {
  environment
} from '../../environments/environment';




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


  constructor() {}


  ngOnInit() {}

  onUserNameChange(event: any) {
    this.userName = event.target.value;
    // console.log(this.userName);
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
      const poolData = {
        UserPoolId: environment.COGNITO_USER_POOL_ID, // Your user pool id here
        ClientId: environment.COGNITO_CLIENT_ID // Your client id here
      };

      const userPool = new CognitoUserPool(poolData);

      const attributeList = [];


      const dataEmail = {
        Name: 'email',
        Value: this.userEmail
      };


      const attributeEmail = new CognitoUserAttribute(dataEmail);
      let cognitoUser;
      attributeList.push(attributeEmail);

      userPool.signUp(this.userName, this.userPassWord, attributeList, null, function (err, result) {
        if (err) {
          console.log(err);
          return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
      });
    } else {
      alert('Repeated password doesnt match');
      console.log(this.userPassWord + " : " + this.userRepeatPassWord)
    }
  }

}
