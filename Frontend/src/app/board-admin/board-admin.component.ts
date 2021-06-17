import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {ClassService} from '../_services/class.service';
import {TeamService} from '../_services/team.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  public classname: string;
  submitted: boolean;
  added: boolean;
  myClasses: any[];
  users: any[];
  form: any = {
    userId: null,
    classId: null,
  };

  constructor(private userService: UserService,
              private classService: ClassService,
              private teamService: TeamService) { }

  ngOnInit(): void {
    this.submitted = false;
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.userService.getAllUsers().subscribe(data => this.users = JSON.parse(data));
    this.classService.getAllClasses().subscribe(data => this.myClasses = JSON.parse(data));
  }
  onSubmit(): void {
    this.classService.getAllClasses().subscribe(data => this.myClasses = JSON.parse(data));
    this.classService.createClass(this.classname).subscribe();
    this.submitted = true;
  }
  addToClass(): void {
    this.userService.addClass(this.form.userId, this.form.classId).subscribe();
    this.added = true;
  }
}
