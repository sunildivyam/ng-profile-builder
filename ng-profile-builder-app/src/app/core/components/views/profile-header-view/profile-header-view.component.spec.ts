import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeaderViewComponent } from './profile-header-view.component';

describe('ProfileHeaderViewComponent', () => {
  let component: ProfileHeaderViewComponent;
  let fixture: ComponentFixture<ProfileHeaderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHeaderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHeaderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
