import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthInterceptor } from './service/auth.interceptor';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AdmincomponentComponent } from './component/admincomponent/admincomponent.component';
import { NavbarComponent } from './component/admincomponent/navbar/navbar.component';
import { UserpageComponent } from './component/admincomponent/userpage/userpage.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    AdmincomponentComponent,
    NavbarComponent,
    UserpageComponent,
    ForgotPasswordPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    NgxPermissionsModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
