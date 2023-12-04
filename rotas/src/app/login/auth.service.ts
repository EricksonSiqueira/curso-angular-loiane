import { EventEmitter, Injectable } from '@angular/core';
import { IUser } from '../interfaces/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticated = false;

  showHeaderEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  login(user: IUser) {
    if (user.username === 'user@email.com' && user.password === '1234') {
      this.authenticated = true;

      this.showHeaderEmitter.emit(this.authenticated);
      this.router.navigate(['/']);
    } else {
      this.authenticated = false;
      this.showHeaderEmitter.emit(this.authenticated);
    }
  }

  userAuthenticated() {
    return this.authenticated;
  }
}
