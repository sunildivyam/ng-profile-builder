import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaViewComponent } from './social-media-view.component';

describe('SocialMediaViewComponent', () => {
  let component: SocialMediaViewComponent;
  let fixture: ComponentFixture<SocialMediaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
