import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationserviceService {
  private user!: User;
  isLogin = false;

  public roleAs!: string;

  constructor() {}

  login(value: string) {
    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem('STATE', 'true');
    localStorage.setItem('ROLE', this.roleAs);
    return of({ success: this.isLogin, role: this.roleAs });
  }

  logout() {
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('STATE', 'false');
    localStorage.setItem('ROLE', '');
    return of({ success: this.isLogin, role: '' });
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true') this.isLogin = true;
    else this.isLogin = false;
    return this.isLogin;
  }

  getRole() {
    //this.roleAs = localStorage.getItem('ROLE');
    return this.roleAs;
  }
}
