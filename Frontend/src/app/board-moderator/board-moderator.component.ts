import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {TaskService} from '../_services/task.service';
import {SubjectService} from '../_services/subject.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  currentUser: any;
  content?: string;
  currentId: string;
  firstname: string;
  lastname: string;
  classes: any[] = [];
  subjects: any[];
  form: any = {
    task_id: uuid.v4(),
    subject_id: null,
    quest: 'test',
    myClasses: null,
    duedate: null,
  };

  // tslint:disable-next-line:max-line-length
  private submitted: boolean;
  // tslint:disable-next-line:max-line-length
  public test: string;

  constructor(private userService: UserService, private token: TokenStorageService, private taskService: TaskService, private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    this.currentId = this.token.getUser().user_id;
    this.userService.getUserById(this.currentId).subscribe(data => {
      this.firstname = JSON.parse(data).first_name;
      this.lastname = JSON.parse(data).last_name;
      this.classes = JSON.parse(data).klasses;
    });
    this.subjectService.getAllSubjects().subscribe(data => {
      this.subjects = JSON.parse((data));
      console.log(data);
    });
    this.test = 'test';

  }

  onSubmit(): void {
    this.submitted = true;
    this.taskService.createTask(this.form).subscribe(data => console.log(data));
  }

}
