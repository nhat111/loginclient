import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignupInfo } from '../shared/signup-info';
import { Observable, throwError } from 'rxjs';
import { retry, catchError ,map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RestApiService {

	urlLogin = 'http://localhost:8080/signin';
  urlSignup = 'http://localhost:8080/signup';
  urlUser = 'http://localhost:8080/userlogin';

  signupifo:SignupInfo[];

  constructor(private http: HttpClient) { }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  userLogin(signinInfo) : Observable<SignupInfo>{
  	return this.http.post<SignupInfo>(this.urlLogin, signinInfo, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
      )

  } 

  userSignup(signupInfo) : Observable<SignupInfo>{

    return this.http.post<SignupInfo>(this.urlSignup,signupInfo, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
      )
  }

   getUserByUserName(): Observable<SignupInfo>{

    return this.http.get<SignupInfo>(this.urlUser).pipe(
      retry(1),
      catchError(this.handleError)
      )
  
  }
}