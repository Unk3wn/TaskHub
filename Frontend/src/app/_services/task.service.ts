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
export class TaskService {
  constructor(private http: HttpClient) {
  }

  getAllTask(): Observable<any> {
    return this.http.get(API_URL + 'task/', {responseType: 'text'});
  }

  getAllTasksByID(): Observable<any> {
    return this.http.get(API_URL + 'task/', {responseType: 'text'});
  }

  // tslint:disable-next-line:variable-name
  createTask(form: any): Observable<any> {
    console.log(form);
    return this.http.post(API_URL + 'task/', {
      task_id: form.task_id,
      subject_id: form.subject_id,
      question: form.question,
      class: form.myClasses.class_id,
      duedate: form.duedate
    }, httpOptions);
  }
}
