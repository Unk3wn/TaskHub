import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '../_services/account.service';
import {ApiService} from "../Services/api.service";

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  users = null;
  users2 = null;

  constructor(
    private accountService: AccountService,
    private apiService: ApiService
  ) {}

  ngOnInit() {

    this.apiService.getUser().subscribe(users => this.users2 = users);
  }

  deleteUser(id: string) {
    const user = this.users.find(x => x.id === id);
    user.isDeleting = true;
    this.accountService.delete(id)
      .pipe(first())
      .subscribe(() => {
        this.users = this.users.filter(x => x.id !== id)
      });
  }

  getUser(): void {
    this.apiService.getUser().subscribe(users => this.users2 = users);
  }
}
