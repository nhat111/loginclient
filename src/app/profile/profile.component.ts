import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { RestApiService} from '../shared/rest-api.service';
import {SignupInfo} from '../shared/signup-info';



@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private restApi:RestApiService) {}
  date: Date;

  users: SignupInfo = {
    userName:'',
    password: '',
    firstName: '',
    lastName:'',
    birthDay:  this.date ,
    gender: '',
    address: ''
  };
  
  ngOnInit() {
    this.restApi.getUserByUserName().subscribe(users =>{
      if(users){
        this.users.userName = users.userName;
        this.users.firstName = users.firstName;
        this.users.lastName = users.lastName;
        this.users.birthDay = users.birthDay;
        this.users.gender = users.gender;
        this.users.address = users.address;
      }

    });
  }
}