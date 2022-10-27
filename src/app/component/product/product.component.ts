import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';

import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public productList: any = [];
  public categoryList: any = [];
  public subcategoryList: any = [];
  public userid: number = localStorage.getItem('userid') as unknown as number;
  searchKey: string = '';
  filteredList = [];
  onApply(event: any) {}

  changeText = true;
  constructor(
    private api: ApiService,
    private cartService: CartService,
    private common: CommonService
  ) {}

  ngOnInit(): void {
    this.common.productObservable.subscribe((res) => {
      if (res) {
        this.productList = res;
      }
    });

    this.api.getProduct().subscribe((res) => {
      this.productList = res;

      this.productList.forEach((a: []) => {
        Object.assign(a, { quantity: 1 });
      });
    });

    this.api.getCategories().subscribe((res) => {
      this.categoryList = res;
    });

    this.cartService.search.subscribe((val: string) => {
      this.searchKey = val;
    });
  }

  addtocart(item: Product, userid: number) {
    this.cartService.setCartCount();
    this.cartService.addtoCart(item, userid).subscribe({
      next: (res) => {
        //console.log(res, 'its cart items');
        alert('Added to cart');
      },
    });
  }

  inc(item: Product) {
    if (item.quantity != 5) {
      item.quantity += 1;
    }
  }

  dec(item: Product) {
    if (item.quantity != 1) {
      item.quantity -= 1;
    }
  }

  filterByCategory(categoryId: number) {
    console.log(categoryId);
  }
}
