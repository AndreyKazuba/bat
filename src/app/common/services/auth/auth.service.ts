import { Injectable } from '@angular/core';
import { Observable, delay, of, tap, map } from 'rxjs';

import { User } from '../../models/User';
import { AuthData } from '../../models/AuthData';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticatedUser: User | undefined;

  constructor(private usersService: UsersService) { }

  authenticate(email: string, password: string): Observable<AuthData> {
    return this.usersService.getUserByCredentials(email, password)
      .pipe(tap(user => {
        this.authenticatedUser = user;
      }))
      .pipe(map(user => ({ canAuthenticate: !!user, userId: user?.id })));
  }

  isUserAuthenticated(userId: number): boolean {
    return this.authenticatedUser?.id === userId;
  }
}
