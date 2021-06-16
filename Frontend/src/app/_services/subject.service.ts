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
export class SubjectService {
  constructor(private http: HttpClient) { }

  getAllSubjects(): Observable<any> {return this.http.get(API_URL + 'subject/', { responseType: 'text' });
  }
  getAllSubjectsByID(): Observable<any> {return this.http.get(API_URL + 'subject/', { responseType: 'text' });
  }

  // tslint:disable-next-line:variable-name
  createSubject( subject_id: string, subject_name: string): Observable<any> {
    return this.http.post(API_URL + 'task/', {
      subject_id,
      subject_name,
    }, httpOptions);
  }
}
