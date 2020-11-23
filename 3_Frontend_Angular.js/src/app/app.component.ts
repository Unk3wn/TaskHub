import { Component } from '@angular/core';

import { AccountService } from '../app/_services/account.service';
import { User } from '../app/_models/user';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.accountService.logout();
  }
}
