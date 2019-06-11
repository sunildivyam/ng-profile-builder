import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesManageLandingComponent } from './profiles-manage-landing.component';

describe('ProfilesManageLandingComponent', () => {
  let component: ProfilesManageLandingComponent;
  let fixture: ComponentFixture<ProfilesManageLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesManageLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesManageLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
