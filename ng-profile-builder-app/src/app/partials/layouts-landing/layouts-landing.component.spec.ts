import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsLandingComponent } from './layouts-landing.component';

describe('LayoutsLandingComponent', () => {
  let component: LayoutsLandingComponent;
  let fixture: ComponentFixture<LayoutsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
