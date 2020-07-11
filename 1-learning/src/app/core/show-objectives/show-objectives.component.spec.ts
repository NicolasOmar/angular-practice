import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowObjectivesComponent } from './show-objectives.component';

describe('ShowObjectivesComponent', () => {
  let component: ShowObjectivesComponent;
  let fixture: ComponentFixture<ShowObjectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowObjectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
