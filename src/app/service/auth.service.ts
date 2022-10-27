import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';


const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  data: User[];

  constructor(private httpClient: HttpClient) {
    this.data = [];
  }

  auth() {
    //const user = localStorage.getItem('session');

    return this.httpClient.get<any>('http://localhost:3000/app-users');
  }

  getAll(): Observable<any> {
    return this.httpClient.get(url);
  }

  update(userid: number, data: any): Observable<any> {
    return this.httpClient.put(`${url}/${userid}`, data);
  }

  delete(userid: number): Observable<any> {
    return this.httpClient.delete(`${url}/${userid}`);
  }

  create(data: User): Observable<any> {
    return this.httpClient.post(url, data);
  }
}
