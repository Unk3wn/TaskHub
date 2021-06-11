import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://localhost:8088/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signIn', {
      username,
      password
    }, httpOptions);
  }

  // tslint:disable-next-line:variable-name
  register(first_name: string, last_name: string, username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signUp', {
      first_name,
      last_name,
      username,
      email,
      password
    }, httpOptions);
  }
}
