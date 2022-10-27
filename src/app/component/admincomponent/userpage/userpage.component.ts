import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
})
export class UserpageComponent implements OnInit {
  public userList: any = [];
  constructor(private api: ApiService, private http: HttpClient) {}

  ngOnInit(): void {
    this.api.getUsers().subscribe((res) => {
      this.userList = res;
    });
  }
  deleteuser(user_id: Number) {
    this.http
      .delete(`http://localhost:3000/app-users/${user_id}`)
      .subscribe((res) => console.log(res));
  }
}
