import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  Form: FormGroup = new FormGroup({
    email: new FormControl(''),
  });
  submitted = false;
  resetKey = '';
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.Form.controls;
  }

  forgotpassword() {
    this.submitted = true;
    if (this.Form.invalid) {
      return;
    }

    this.http
      .post('http://localhost:3000/reset-password/init', this.Form.value, {
        responseType: 'text',
      })
      .subscribe(
        (res) => {
          console.log(res);
          this.resetKey = res;

          // this.router.navigate(['/forgot-password-page'], {
          //   state: [this.resetKey],
          // });
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
