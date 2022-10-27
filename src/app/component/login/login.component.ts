import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.http
      .post<any>('http://localhost:3000/login', this.loginForm.value)
      .subscribe({
        next: (res) => {
          this.toastr.success('Login Successfuly');
          let roletype = Number(localStorage.getItem('user'));
          console.log(roletype);
          const returnUrl =
            this.route.snapshot.queryParams['returnUrl'] || '/home';
          this.router.navigateByUrl(returnUrl);
          console.log(res);
          localStorage.setItem('session', JSON.stringify(res.user));
          localStorage.setItem('user', JSON.stringify(res.user.rolesId));
          localStorage.setItem('sessionDetails', res.token);
          localStorage.setItem('userid', res.user.id);
          localStorage.setItem('roles', JSON.stringify(res.user.roles));
        },
        error: (err) => {
          this.toastr.error('Users credentials didnt match');
        },
      });
  }
}
