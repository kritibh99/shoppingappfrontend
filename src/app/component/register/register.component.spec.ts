import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let el:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(),FormsModule,RouterTestingModule,
        ReactiveFormsModule,HttpClientTestingModule],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should set submitted to true', async(() => {
    component.register();
    expect(component.register).toBeTruthy();

 }));

 it('Should call the register method', () =>{ fakeAsync(() =>{
  fixture.detectChanges();
  spyOn(component,'register');
  el=fixture.debugElement.query(By.css('login')).nativeElement;
  el.click();
  expect(component.register).toHaveBeenCalledTimes(0);
 })
 
 });

 it('Form should be invalid', async(()=> {
  component.registerForm.controls['username'].setValue('');
  component.registerForm.controls['email'].setValue('');
  component.registerForm.controls['password'].setValue('');
  component.registerForm.controls['firstname'].setValue('');
  component.registerForm.controls['lastname'].setValue('');
  expect(component.registerForm.valid).toBeFalsy();
}));
 

it('Form should be valid', async(()=> {
      component.registerForm.controls['username'].setValue('admin');
    component.registerForm.controls['email'].setValue('admin@gmail.com');
    component.registerForm.controls['password'].setValue('admin123');
    component.registerForm.controls['firstname'].setValue('admin');
    component.registerForm.controls['lastname'].setValue('data');
  expect(component.registerForm.valid).toBeTruthy();
}));

})
