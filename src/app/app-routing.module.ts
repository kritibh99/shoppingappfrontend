import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AdmincomponentComponent } from './component/admincomponent/admincomponent.component';
import { AuthguardGuard } from './authguard.guard';
import { UserpageComponent } from './component/admincomponent/userpage/userpage.component';
import { NavbarComponent } from './component/admincomponent/navbar/navbar.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'forgot-password-page', component: ForgotPasswordPageComponent },
  {
    path: 'home',
    component: NavbarComponent,
  },
  {
    path: 'admin',
    component: AdmincomponentComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'users',
    canActivate: [AuthguardGuard],
    component: UserpageComponent,
  },
  {
    path: 'products',

    loadChildren: () =>
      import('./component/product/product-module').then((m) => m.ProductModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./component/cart/cart-module').then((m) => m.CartModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./component/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./component/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./component/checkout/checkout.module').then(
        (m) => m.CheckoutModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NgxPermissionsModule,
    ToastrModule.forRoot({
      positionClass: 'top-left',
      closeButton: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
