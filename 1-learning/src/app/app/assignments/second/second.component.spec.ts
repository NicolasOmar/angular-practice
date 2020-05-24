import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAssignmentComponent } from './second.component';

describe('SecondAssignmentComponent', () => {
  let component: SecondAssignmentComponent;
  let fixture: ComponentFixture<SecondAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
