import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, NgxPermissionsModule.forChild()],
})
export class CartModule {}
