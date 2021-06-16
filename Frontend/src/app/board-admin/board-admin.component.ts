import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {ApiService} from '../_services/api.service';
import {ClassService} from '../_services/class.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  public classname: string;

  constructor(private userService: UserService,
              private classService: ClassService ) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  onSubmit(): void {
    this.classService.createClass(this.classname).subscribe();
  }
}
