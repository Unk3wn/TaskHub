import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './_models/user';
import {environment} from '../../environments/environment.prod';

const API_URL = 'https://localhost:8088/api/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SolutionService {
  constructor(private http: HttpClient) {
  }

  getAllSolutions(): Observable<any> {
    return this.http.get(API_URL + 'solution/', {responseType: 'text'});
  }

  getAllSolutionsByID(): Observable<any> {
    return this.http.get(API_URL + 'solution/', {responseType: 'text'});
  }

  // tslint:disable-next-line:variable-name
  createSolutions(form: any): Observable<any> {
    console.log(form);
    return this.http.post(API_URL + 'solution/', {
      text: form.text,
      time_ended: form.time_ended,
      reviewed: form.reviewed,
      marked: form.marked,
      mark: form.mark,
      task: form.task
    }, httpOptions);
  }
}
