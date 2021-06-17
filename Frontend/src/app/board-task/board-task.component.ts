import { Component, OnInit } from '@angular/core';
import {TaskService} from '../_services/task.service';
import {SolutionService} from '../_services/solution.service';
import {TeamService} from '../_services/team.service';
import {UserService} from '../_services/user.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.css']
})
export class BoardTaskComponent implements OnInit {
   currentId: string;
   firstname: any;
   lastname: any;
   teams: any[];
   tasks: any[];
   submitted: any;
  form: any = {
    text: null,
    time_ended: false,
    reviewed: false,
    marked: false,
    mark: null,
    task: null,
    team: null,
  };

  constructor(private token: TokenStorageService, private taskService: TaskService, private solutionService: SolutionService, private teamService: TeamService, private userService: UserService) { }

  ngOnInit(): void {
    this.taskService.getAllTask().subscribe(data => {
      this.tasks = JSON.parse(data);
    });
    console.log(this.tasks);
    this.currentId = this.token.getUser().user_id;
    this.userService.getUserById(this.currentId).subscribe(data => {
      this.firstname = JSON.parse(data).first_name;
      this.lastname = JSON.parse(data).last_name;
      this.teams = JSON.parse(data).teams;
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.solutionService.createSolutions(this.form).subscribe(data => console.log(data));
  }

}
