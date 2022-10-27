// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';
// import { RouterTestingModule } from '@angular/router/testing';
// import { ToastrModule } from 'ngx-toastr';

// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let el: HTMLElement;


//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ToastrModule.forRoot(),RouterTestingModule,
//         ReactiveFormsModule,HttpClientTestingModule],
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });


//   it('Should set submitted to true', async(() => {
//     component.login();
//     expect(component.login).toBeTruthy();

//  }));

 

// it('Should call the login method', () =>{ fakeAsync(() =>{
//  fixture.detectChanges();
//  spyOn(component,'login');
//  el=fixture.debugElement.query(By.css('login')).nativeElement;
//  el.click();
//  expect(component.login).toHaveBeenCalledTimes(0);
// })

// });

 
//  it('Form should be invalid', async(()=> {
//   component.loginForm.controls['username'].setValue('');
//   component.loginForm.controls['password'].setValue('');
//   expect(component.loginForm.valid).toBeFalsy();
// }));
 
//  it('Form should be valid', async(()=> {
//   component.loginForm.controls['username'].setValue('admin');
//   component.loginForm.controls['password'].setValue('admin123');
//   expect(component.loginForm.valid).toBeTruthy();
// }));
// });
