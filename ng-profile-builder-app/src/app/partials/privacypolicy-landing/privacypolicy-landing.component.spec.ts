import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacypolicyLandingComponent } from './privacypolicy-landing.component';

describe('PrivacypolicyLandingComponent', () => {
  let component: PrivacypolicyLandingComponent;
  let fixture: ComponentFixture<PrivacypolicyLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacypolicyLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacypolicyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
