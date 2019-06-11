import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesDashboardLandingComponent } from './profiles-dashboard-landing.component';

describe('ProfilesDashboardLandingComponent', () => {
  let component: ProfilesDashboardLandingComponent;
  let fixture: ComponentFixture<ProfilesDashboardLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesDashboardLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesDashboardLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
