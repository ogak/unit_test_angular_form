import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule, EmailValidator } from '@angular/forms';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports : [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('Validasi input nama', async () => {
      let name = component.form.controls['name'];
      name.setValue('');
      expect(name.valid).toBe(false);
      name.setValue('John');
      expect(name.valid).toBe(true);
  });

  it('Validasi input email', async () => {
    let email = component.form.controls['email'];
    email.setValue('test@email.com');
    expect(email.valid).toBe(true);
    email.setValue('test');
    expect(email.valid).toBe(false);
    email.setValue('');
    expect(email.valid).toBe(false);
  })

  it('Validasi input password', async () => {
    let password = component.form.controls['password'];
    password.setValue('12345677');
    expect(password.value.length).toBeGreaterThanOrEqual(8);
    password.setValue('fswrw2');
    expect(password.valid).toBe(false);
    password.setValue('');
    expect(password.valid).toBe(false);
});

it ('Validasi submit form', async () => {

  expect(component.form.valid).toBe(false);
  component.form.controls['name'].setValue('John Doe');
  component.form.controls['email'].setValue('johndoe@email.com');
  component.form.controls['password'].setValue('1234456778');
  expect(component.form.valid).toBe(true);

});


});
