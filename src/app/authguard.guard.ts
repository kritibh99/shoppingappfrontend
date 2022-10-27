import { Injectable } from '@angular/core';
import { AuthService } from './service/auth.service';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let user;
    return this.auth.auth().pipe(
      map((res) => {
        user = res;

        //check if route is restricted by role
        if (user['role'] !== 'Admin') {
          // role not authorised so redirect to home page
          this.router.navigate(['/login']);
        }

        // authorised so return true

        return true;
      })
    );
  }
}
