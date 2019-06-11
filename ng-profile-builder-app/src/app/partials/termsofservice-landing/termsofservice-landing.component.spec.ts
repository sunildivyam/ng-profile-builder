import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsofserviceLandingComponent } from './termsofservice-landing.component';

describe('TermsofserviceLandingComponent', () => {
  let component: TermsofserviceLandingComponent;
  let fixture: ComponentFixture<TermsofserviceLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsofserviceLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsofserviceLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
