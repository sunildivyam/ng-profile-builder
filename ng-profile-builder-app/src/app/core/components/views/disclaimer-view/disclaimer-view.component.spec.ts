import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerViewComponent } from './disclaimer-view.component';

describe('DisclaimerViewComponent', () => {
  let component: DisclaimerViewComponent;
  let fixture: ComponentFixture<DisclaimerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
