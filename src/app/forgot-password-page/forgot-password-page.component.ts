import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css'],
})
export class ForgotPasswordPageComponent implements OnInit {
  @Input() resetKey = '';

  Form: FormGroup = new FormGroup({
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
  });
  submitted = false;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router
  ) {
    this.data = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
      confirmPassword: [
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
    return this.Form.controls;
  }

  forgotpassword() {
    this.submitted = true;
    if (this.Form.invalid) {
      return;
    }
    //this.Form.value['resetKey'] = this.data[0];

    var headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http
      .post(
        'http://localhost:3000/reset-password/finish',
        JSON.stringify(this.Form.value),
        { headers: headers }
      )
      .subscribe(
        (res) => {
          this.toastr.success('Updated Successfuly');

          console.log(res);
          this.router.navigateByUrl('/login');
        },
        (error) => console.log(error)
      );
  }
}
