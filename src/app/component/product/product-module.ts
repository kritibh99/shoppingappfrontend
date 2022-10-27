import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { FilterPipe } from 'src/app/shared/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [ProductComponent, FilterPipe, HeaderComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forChild(),
  ],
})
export class ProductModule {}
