import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintProfileLandingComponent } from './print-profile-landing.component';

describe('PrintProfileLandingComponent', () => {
  let component: PrintProfileLandingComponent;
  let fixture: ComponentFixture<PrintProfileLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintProfileLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintProfileLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
