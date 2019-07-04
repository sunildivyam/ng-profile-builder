import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxProfileLandingComponent } from './paralax-profile-landing.component';

describe('ParalaxProfileLandingComponent', () => {
  let component: ParalaxProfileLandingComponent;
  let fixture: ComponentFixture<ParalaxProfileLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParalaxProfileLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParalaxProfileLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
