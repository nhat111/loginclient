export class SignupInfo {
	userName:String;
	password: String;
	firstName: String;
	lastName: String;
	birthDay: Date;
	gender: String;
	address: String;

	constructor(userName:String,password:String,firstName:String,
		        lastName:string,birthDay:Date,gender:String,address:String){

		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDay = birthDay;
		this.gender = gender;
		this.address = address;
	}
}
