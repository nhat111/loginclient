import { Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { RestApiService} from '../shared/rest-api.service';
import {SignupInfo} from '../shared/signup-info';
import {Router} from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	form: any = {};//form input
	private signupInfo: SignupInfo;
	
	constructor(private restApi:RestApiService,public router:Router) {}

	ngOnInit() {}

	doRegister(){
		this.signupInfo = new SignupInfo(
			this.form.userName,
			this.form.password,
			this.form.firstName,
			this.form.lastName,
			this.form.birthDay,
			this.form.gender,
			this.form.address);

		this.restApi.userSignup(this.signupInfo).subscribe((data: {}) => {
			this.router.navigate(['/login'])
			//window.alert("signup success")
		})
	}

}
