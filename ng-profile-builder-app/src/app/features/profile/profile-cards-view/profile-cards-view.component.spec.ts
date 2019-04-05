import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardsViewComponent } from './profile-cards-view.component';

describe('ProfileCardsViewComponent', () => {
  let component: ProfileCardsViewComponent;
  let fixture: ComponentFixture<ProfileCardsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCardsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
