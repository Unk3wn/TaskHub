import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {TeamService} from '../_services/team.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  teams: any[];
  constructor(private userService: UserService, private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(data => this.teams = JSON.parse((data)));
  }
}
