import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ForgotPasswordComponent } from './forgot-password.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let el:HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule,RouterTestingModule,
        ReactiveFormsModule,HttpClientTestingModule],
      declarations: [ ForgotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should set submitted to true', async(() => {
    component.forgotpassword();
    expect(component.forgotpassword).toBeTruthy();

 }));
 it('Should call the forgotpassword method', () =>{ fakeAsync(() =>{
  fixture.detectChanges();
  spyOn(component,'forgotpassword');
  el=fixture.debugElement.query(By.css('login')).nativeElement;
  el.click();
  expect(component.forgotpassword).toHaveBeenCalledTimes(0);
 })
 
 });
 it('Form should be invalid', async(()=> {
  component.Form.controls['email'].setValue('');
  expect(component.Form.valid).toBeFalsy();
}));
 
 it('Form should be valid', async(()=> {
  component.Form.controls['email'].setValue('admin@gmail.com');
  expect(component.Form.valid).toBeTruthy();
}));
 

});
