import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassworsComponent } from './forget-passwors.component';

describe('ForgetPassworsComponent', () => {
  let component: ForgetPassworsComponent;
  let fixture: ComponentFixture<ForgetPassworsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetPassworsComponent]
    });
    fixture = TestBed.createComponent(ForgetPassworsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
