import { Component, OnInit,Input} from '@angular/core';
import {Observable} from 'rxjs';
import { RestApiService} from '../shared/rest-api.service';
import {SigninInfo} from '../shared/signin-info';
import {Router} from '@angular/router';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	form: any = {};
	private signinInfo: SigninInfo;
	
	constructor(public restApi: RestApiService,public router:Router) { }

	ngOnInit() {}

	doLogin() {

		console.log(this.form);

		this.signinInfo = new SigninInfo(
			this.form.userName,
			this.form.password);

		this.restApi.userLogin(this.signinInfo).subscribe((data: {}) => {
			this.router.navigate(['/profile'])
		})
	}

}

