import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public cartCount = new BehaviorSubject<any>([]);
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
    //this.cartItemList = JSON.parse(localStorage.getItem('products') || '');
    this.productList.next(this.cartItemList.length);
  }

  setCartCount() {
    return this.cartCount.next(true);
  }

  getProducts() {
    return this.productList.asObservable();
  }

  addtoCart(product: Product, userid: number) {
    const data = product;
    var headers = new HttpHeaders().set('Content-Type', 'application/json');

    console.log(JSON.stringify(data));
    return this.http.post<any>(
      `http://localhost:3000/shoppingcarts/${userid}/items`,
      JSON.stringify(data),
      { headers: headers }
    );
  }

  getCartById(userid: number) {
    console.log();
    return this.http.get<any>(`http://localhost:3000/shoppingcarts/${userid}`);
  }

  removeCartItem(productid: number) {
    return this.http
      .delete(`http://localhost:3000/shoppingcarts/${productid}`)
      .subscribe({
        next: (response) => {},
        error: (err) => {},
      });
  }

  removeAllCart(userid: number) {
    return this.http
      .delete(`http://localhost:3000/shoppingcarts/${userid}`)
      .subscribe({
        next: (response) => {},
        error: (err) => {},
      });
  }
}
