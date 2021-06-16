import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './_models/user';
import {environment} from '../../environments/environment.prod';

const API_URL = 'https://localhost:8088/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  constructor(private http: HttpClient) { }

  getAllClasses(): Observable<any> {return this.http.get(API_URL + 'class/', { responseType: 'text' });
  }
  getAllClassesByID(): Observable<any> {return this.http.get(API_URL + 'class/', { responseType: 'text' });
  }
  // tslint:disable-next-line:variable-name
  createClass(classname: string): Observable<any> {
    return this.http.post(API_URL + 'class/', {
      classname
    }, httpOptions);
  }
}
