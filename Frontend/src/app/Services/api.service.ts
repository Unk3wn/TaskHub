import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../_models/user';
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import {process} from 'process';
import {Classroom} from '../classroom/classroom';
import {Task} from 'protractor/built/taskScheduler';
import {Subject} from '../_models/subject';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: 'http://localhost:8808/api';

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<User[]> {
    console.log('NICO IST EIN KLEINER DUDE');
    try {
      const user = this.http.get<User[]>(('http://localhost:8088/api/user'));
      return user;
    } catch (exception) {
      process.stderr.write(`ERROR received from ${this.apiUrl}: ${exception}\n`);
    }
  }

  getClassroom(): Observable<Classroom[]> {
    try {
      const classeroom = this.http.get<Classroom[]>(('http://localhost:8088/api/class'));
      return classeroom;
    } catch (exception) {
      process.stderr.write(`ERROR received from ${this.apiUrl}: ${exception}\n`);
    }
  }

  getSubject(): Observable<Subject[]> {
    try {
      const subject = this.http.get<Subject[]>(('http://localhost:8088/api/task'));
      return subject;
    } catch (exception) {
      process.stderr.write(`ERROR received from ${this.apiUrl}: ${exception}\n`);
    }
  }

  getTask(): Observable<Task[]> {
    try {
      const task = this.http.get<Task[]>(('http://localhost:8088/api/task'));
      return task;
    } catch (exception) {
      process.stderr.write(`ERROR received from ${this.apiUrl}: ${exception}\n`);
    }
  }
  postTask(answers): Observable<Task[]> {
    try {
      const answer = this.http.post<Task[]>(('http://localhost:8088/api/task/'), JSON.stringify(answers));
      return answer;
    }catch (exception) {
      process.stderr.write(`ERROR received from ${this.apiUrl}: ${exception}\n`);
    }

}
}
