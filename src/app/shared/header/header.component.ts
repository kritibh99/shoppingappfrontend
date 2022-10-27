import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  public searchTerm: string = '';
  public categoryList: any = [];
  public subcategoryList: any = [];
  public selectedCategory!: number;
  public selectedSubCategory!: number;
  public userid = JSON.parse(String(localStorage.getItem('userid')));
  public userData: any;

  category_id!: number;
  resarray: any;
  public userName: string = '';

  constructor(
    private api: ApiService,
    private router: Router,
    private cartService: CartService,
    private common: CommonService,
    private authservice: AuthService
  ) {
    this.cartService.cartCount.subscribe((res) => {
      if (res) {
        this.cartCounter();
      }
    });
    this.cartCounter();
  }

  cartCounter() {
    this.cartService.getCartById(this.userid).subscribe((res) => {
      this.totalItem = res.length;
    });
  }

  ngOnInit(): void {
    this.authservice.auth().subscribe((res) => {
      this.userData = res;
      this.userName = `${res.firstname} ${res.lastname}`;
    });
    this.api.getCategories().subscribe((res) => {
      this.categoryList = res;
    });
  }

  // logout() {
  //   localStorage.clear();
  //   location.reload();
  //   this.router.navigate(['/login']);

  //   // localStorage.removeItem('sessionDetails');
  // }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;

    this.cartService.search.next(this.searchTerm);
  }

  onCategorySelect(event: any) {
    if (event) {
      this.category_id = event.id;
      this.api.getSubCategories(this.category_id).subscribe((data) => {
        this.subcategoryList = data;
      });
    }
  }
  onSelectSubCategory() {
    if (this.selectedSubCategory) {
      this.api
        .getProductsSubCategoryId(this.selectedSubCategory)
        .subscribe((data) => {
          this.common.shareProductData(data);
        });
    }
  }
}
