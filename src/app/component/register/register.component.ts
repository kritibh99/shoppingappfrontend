import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { roleType } from './role-type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  });
  RoleType = roleType;
  submitted = false;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(40),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  register() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.http
      .post<any>('http://localhost:3000/signup', this.registerForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.success('Registered Successfuly');

          this.router.navigateByUrl('/login');
        },
        error: (err) => {
          console.log('error', err);
          this.toastr.error(`${err.error}`);
        },
      });
  }
}
