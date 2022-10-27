import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  productSubject = new BehaviorSubject<any>(null);

  productObservable = this.productSubject.asObservable();

  constructor() {}

  shareProductData(data: any) {
    this.productSubject.next(data);
  }
}
