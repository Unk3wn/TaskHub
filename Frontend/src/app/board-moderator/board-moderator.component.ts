import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {TaskService} from '../_services/task.service';
import {SubjectService} from '../_services/subject.service';

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
  classes: any[];
  subjects: any[];
  form: any = {
    task_id: null,
    subject_id: null,
    question: null,
    classes: null,
    duedate: null,
  };

  // tslint:disable-next-line:max-line-length
  constructor(private userService: UserService, private token: TokenStorageService, private taskService: TaskService, private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    /*this.userService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );*/
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

    // this.taskService.createTask()

  }

}
