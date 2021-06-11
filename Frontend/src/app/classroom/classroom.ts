import { Component, OnInit } from '@angular/core';
import {ApiService} from "../_services/api.service";

@Component({
  selector: 'app-new-component',
  templateUrl: './classroom.html',
  styleUrls: ['./classroom.css']
})
export class Classroom implements OnInit {
   classrooms: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getClassroom().subscribe(classroom => this.classrooms = classroom);
  }

}
