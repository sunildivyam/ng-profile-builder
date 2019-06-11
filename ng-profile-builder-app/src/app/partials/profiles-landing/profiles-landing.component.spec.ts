import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesLandingComponent } from './profiles-landing.component';

describe('ProfilesLandingComponent', () => {
  let component: ProfilesLandingComponent;
  let fixture: ComponentFixture<ProfilesLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
