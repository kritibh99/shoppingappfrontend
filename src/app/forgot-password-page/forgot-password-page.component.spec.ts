// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';
// import { RouterTestingModule } from '@angular/router/testing';
// import { ToastrModule } from 'ngx-toastr';
// import { ForgotPasswordPageComponent } from './forgot-password-page.component';

// describe('ForgotPasswordPageComponent', () => {
//   let component: ForgotPasswordPageComponent;
//   let fixture: ComponentFixture<ForgotPasswordPageComponent>;
//   let el:HTMLElement;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports:[RouterTestingModule,
//         ReactiveFormsModule,ToastrModule.forRoot(),HttpClientTestingModule],
//       declarations: [ ForgotPasswordPageComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ForgotPasswordPageComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('Should set submitted to true', async(() => {
//     component.forgotpassword();
//     expect(component.forgotpassword).toBeTruthy();

//  }));

//  it('Should call the FORGOTPASSWORD method', () =>{ fakeAsync(() =>{
//   fixture.detectChanges();
//   spyOn(component,'forgotpassword');
//   el=fixture.debugElement.query(By.css('login')).nativeElement;
//   el.click();
//   expect(component.forgotpassword).toHaveBeenCalledTimes(0);
//  })
 
//  });

//  it('Form should be invalid', async(()=> {
//   component.Form.controls['password'].setValue('');
//   component.Form.controls['confirmPassword'].setValue('');
//   expect(component.Form.valid).toBeFalsy();
// }));
 

// it('Form should be valid', async(()=> {
//       component.Form.controls['password'].setValue('admin123');
//     component.Form.controls['confirmPassword'].setValue('admin123');
//   expect(component.Form.valid).toBeTruthy();
// }));
// });
