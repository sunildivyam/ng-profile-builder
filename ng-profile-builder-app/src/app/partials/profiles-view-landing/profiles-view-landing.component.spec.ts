import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesViewLandingComponent } from './profiles-view-landing.component';

describe('ProfilesViewLandingComponent', () => {
  let component: ProfilesViewLandingComponent;
  let fixture: ComponentFixture<ProfilesViewLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesViewLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesViewLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
