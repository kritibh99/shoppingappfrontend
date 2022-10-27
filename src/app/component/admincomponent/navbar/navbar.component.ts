import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public user: any = [];
  constructor(
    private auth: AuthService,
    private permissionService: NgxPermissionsService
  ) {}

  ngOnInit(): void {
    this.auth.auth().subscribe((res) => {
      const user = localStorage.getItem('roles');
      this.user = user;
      console.log(user, 'heyyyyy its may');

      this.permissionService.loadPermissions([this.user.role]);
    });
  }
}
