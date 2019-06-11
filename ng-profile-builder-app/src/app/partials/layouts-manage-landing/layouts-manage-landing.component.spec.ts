import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsManageLandingComponent } from './layouts-manage-landing.component';

describe('LayoutsManageLandingComponent', () => {
  let component: LayoutsManageLandingComponent;
  let fixture: ComponentFixture<LayoutsManageLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutsManageLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsManageLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
