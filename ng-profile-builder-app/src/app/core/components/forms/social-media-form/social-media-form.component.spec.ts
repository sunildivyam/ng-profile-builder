import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaFormComponent } from './social-media-form.component';

describe('SocialMediaFormComponent', () => {
  let component: SocialMediaFormComponent;
  let fixture: ComponentFixture<SocialMediaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
