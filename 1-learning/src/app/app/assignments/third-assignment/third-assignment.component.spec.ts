import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdAssignmentComponent } from './third-assignment.component';

describe('ThirdAssignmentComponent', () => {
  let component: ThirdAssignmentComponent;
  let fixture: ComponentFixture<ThirdAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
