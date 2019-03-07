import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSectionPickerComponent } from './profile-section-picker.component';

describe('ProfileSectionPickerComponent', () => {
  let component: ProfileSectionPickerComponent;
  let fixture: ComponentFixture<ProfileSectionPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSectionPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSectionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
