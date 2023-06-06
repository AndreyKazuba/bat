import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../../models/User';
import { AuthData } from '../../models/AuthData';
import { USERS } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private authenticatedUser: User | undefined;

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUser(id: number): Observable<User | undefined> {
    return of(USERS.find(user => user.id === id));
  }

  logIn(email: string, password: string): Observable<AuthData> {
    const user: User | undefined = USERS.find(user => user.email === email && user.password === password);
    return new Observable(subscriber => {
      setTimeout(() => {
        this.authenticatedUser = user;
        subscriber.next({ canAuthenticate: !!user, userId: user?.id });
      }, 2000);
    });
  }

  getFriends(userId: number): Observable<User[] | undefined> {
    const user = USERS.find(currentUser => currentUser.id === userId);
    if (user) {
      const friends = USERS.filter(currentUser => user.friendsIds.some(userId => userId === currentUser.id));
      return of(friends);
    }

    return new Observable();
  }

  isUserAuthenticated(userId: number): boolean {
    return this.authenticatedUser?.id === userId;
  }
}
