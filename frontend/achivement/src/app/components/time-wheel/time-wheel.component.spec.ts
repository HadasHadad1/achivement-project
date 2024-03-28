import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWheelComponent } from './time-wheel.component';

describe('TimeWheelComponent', () => {
  let component: TimeWheelComponent;
  let fixture: ComponentFixture<TimeWheelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeWheelComponent]
    });
    fixture = TestBed.createComponent(TimeWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
