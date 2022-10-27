import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal: number = 0;

  public userid = JSON.parse(String(localStorage.getItem('userid')));

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartById(this.userid).subscribe((res) => {
      this.products = res.items;
      console.log(this.products);
      console.log(res, 'ye res hai');
      if (res) {
        this.getTotalPrice(res);
      }
    });
  }
  getTotalPrice(products: Product) {
    console.log(products, 'products');
    let productprice = products.price;
    console.log(products);
    let productquantity = products.quantity;
    this.grandTotal = 0;
    let sum = parseInt(productprice) * productquantity;
    // product.map((a: any) => {
    //   console.log(a, 'ismai price hai');
    //   let sum = parseInt(a.price) * parseInt(a.quantity);
    this.grandTotal += sum;
    console.log(this.grandTotal);
    // });
  }

  removeItem(productid: number) {
    this.cartService.removeCartItem(productid);
    this.cartService.getCartById(this.userid).subscribe((res) => {
      this.products = res;
      this.getTotalPrice(this.products);
    });
  }
  emptycart(userid: number) {
    this.cartService.removeAllCart(userid);
    this.cartService.getCartById(this.userid).subscribe((res) => {
      this.products = res;
    });

    console.log(userid);
  }
}
