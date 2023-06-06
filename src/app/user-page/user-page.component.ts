import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../common/services/users/users.service';
import { User } from '../common/models/User';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  public currentUser: User | undefined;
  public friends: User[] | undefined;

  constructor(private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(userId).subscribe(user => this.currentUser = user);
    if (this.currentUser) {
      this.userService.getFriends(this.currentUser.id).subscribe(friends => this.friends = friends);
    }
  }
}
