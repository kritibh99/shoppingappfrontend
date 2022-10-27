import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-admincomponent',
  templateUrl: './admincomponent.component.html',
  styleUrls: ['./admincomponent.component.css'],
})
export class AdmincomponentComponent implements OnInit {
  public productList: any = [];
  public categoryList: any = [];
  public productLists: any = [];
  loginForm: FormGroup = new FormGroup({
    image: new FormControl(''),
    title: new FormControl(''),
  });
  form: FormGroup = new FormGroup({
    image: new FormControl(''),
    images: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    subcategoryid: new FormControl(''),
    title: new FormControl(''),
  });
  submitted = false;
  submits = false;

  constructor(
    private api: ApiService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;

      this.productList.forEach((a: []) => {
        Object.assign(a, { quantity: 1 });
      });
    });

    this.api.getCategories().subscribe((res) => {
      this.categoryList = res;
    });
    this.api.getProduct().subscribe((res) => {
      this.productLists = res;
    });
    this.loginForm = this.formBuilder.group({
      image: ['', [Validators.required]],
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
    this.form = this.formBuilder.group({
      image: ['', [Validators.required]],
      images: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      subcategoryid: ['', [Validators.required]],
      title: [
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
  get g(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  addnewcategory() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.http
      .post<any>('http://localhost:3000/products', this.loginForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  deletecategory(category_id: Number) {
    this.http
      .delete(`http://localhost:3000/products/${category_id}`)
      .subscribe((res) => console.log(res));
  }
  deleteproduct(product_id: Number) {
    this.http
      .delete(`http://localhost:3000/products/${product_id}`)
      .subscribe((res) => console.log(res));
  }

  addnewproduct() {
    this.submits = true;
    if (this.form.invalid) {
      return;
    }
    this.http
      .post<any>('http://localhost:3000/products', this.form.value)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
