import { UserService } from './../profile/user-services/user.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js/dist/amazon-cognito-identity.min';
import { poolData } from 'src/models/poolData';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { environment } from '../../environments/environment';
import Axios from 'axios';




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
  private address: string;
  private city: string;
  private state: string;
  private birthday;
  private latitude;
  private longitude;

  private gMapsApi = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  private gMapsKey: string = '&key=' + environment.GOOGLE_MAPS_API_KEY;

  constructor(private UserService:UserService) {}


  ngOnInit() {}

  onUserNameChange(event: any) {
    this.userName = event.target.value;
    // console.log(this.userName);
  }

  onAddressChange(event: any) {
    this.address = event.target.value;
  }

  onCityChange(event: any) {
    this.city = event.target.value;
  }

  onStateChange(event: any) {
    this.state = event.target.value;
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


  async registerUser() {
    if (this.userPassWord === this.userRepeatPassWord) {

      const userPool = new CognitoUserPool(poolData);

      const attributeList = [];

      const urlAddress: string = this.address.split(' ').join('+') + ',+';
      const urlCity: string = this.city.split(' ').join('+') + ',+';

      const gMapsUrl = this.gMapsApi + urlAddress + urlCity + this.state + this.gMapsKey;
      const gMapLocations = await Axios.get(gMapsUrl);
      const {lat, lng} = gMapLocations.data.results[0].geometry.location;
      this.latitude = lat;
      this.longitude = lng;
      const locationObject = {
        lat,
        lng,
        city: this.city,
        state: this.state,
        address: this.address
      };
      localStorage.setItem('locationData', JSON.stringify(locationObject));
      // await this.UserService.addUserAddress(locationObject);

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

      // const cityData = {
      //   Name: 'city',
      //   Value: this.city
      // };

      // const stateData = {
      //   Name: 'state',
      //   Value: this.state
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

      userPool.signUp(this.userEmail, this.userPassWord, attributeList, null, async (err, result) => {
        if (err) {
          alert(err.message);
          console.log(err);
          console.log(`error in Signup Process`);
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
