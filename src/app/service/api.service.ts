import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<any>('http://localhost:3000/products').pipe(
      map((res: Product) => {
        return res;
      })
    );
  }

  getCategories() {
    return this.http.get<any>('http://localhost:3000/categories').pipe(
      map((res: Product) => {
        return res;
      })
    );
  }

  getSubCategories(categoryid: number) {
    return this.http
      .get<any>(`http://localhost:3000/sub-categories/${categoryid}`)
      .pipe(
        map((res: Product) => {
          return res;
        })
      );
  }

  getProductsSubCategoryId(subCategoryId: number) {
    return this.http
      .get<any>(`http://localhost:3000/products/${subCategoryId}`)
      .pipe(
        map((res: Product) => {
          return res;
        })
      );
  }

  getUsers() {
    return this.http.get(`http://localhost:3000/app-users`);
  }
}
