import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsDashboardLandingComponent } from './layouts-dashboard-landing.component';

describe('LayoutsDashboardLandingComponent', () => {
  let component: LayoutsDashboardLandingComponent;
  let fixture: ComponentFixture<LayoutsDashboardLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutsDashboardLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsDashboardLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
