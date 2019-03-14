import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersSmallViewComponent } from './employers-small-view.component';

describe('EmployersSmallViewComponent', () => {
  let component: EmployersSmallViewComponent;
  let fixture: ComponentFixture<EmployersSmallViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersSmallViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersSmallViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
