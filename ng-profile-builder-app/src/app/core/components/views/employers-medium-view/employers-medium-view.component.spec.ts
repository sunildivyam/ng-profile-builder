import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersMediumViewComponent } from './employers-medium-view.component';

describe('EmployersMediumViewComponent', () => {
  let component: EmployersMediumViewComponent;
  let fixture: ComponentFixture<EmployersMediumViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersMediumViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersMediumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
