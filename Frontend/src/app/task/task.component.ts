import { Component, OnInit } from '@angular/core';
import {ApiService} from "../Services/api.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTask().subscribe(tasks => this.tasks = tasks);
  }

}
