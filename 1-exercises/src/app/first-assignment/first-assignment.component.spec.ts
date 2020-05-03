import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAssignmentComponent } from './first-assignment.component';

describe('FirstAssignmentComponent', () => {
  let component: FirstAssignmentComponent;
  let fixture: ComponentFixture<FirstAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
