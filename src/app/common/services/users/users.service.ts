import { Injectable } from '@angular/core';
import { Observable, delay, of, tap, map } from 'rxjs';

import { User } from '../../models/User';
import { USERS } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS)
      .pipe(delay(2000));
  }

  getUserById(id: number): Observable<User | undefined> {
    return of(USERS.find(user => user.id === id))
      .pipe(delay(2000));
  }

  getUserByCredentials(email: string, password: string): Observable<User | undefined> {
    return of(USERS.find(user => user.email === email && user.password === password))
      .pipe(delay(2000));
  }

  getFriends(userId: number): Observable<User[]> {
    const user = USERS.find(currentUser => currentUser.id === userId);
    if (user) {
      const friends = USERS.filter(currentUser => user.friendsIds.some(userId => userId === currentUser.id));
      return of(friends).pipe(delay(2000));
    }

    return of().pipe(delay(2000));
  }
}
