import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersViewComponent } from './employers-view.component';

describe('EmployersViewComponent', () => {
  let component: EmployersViewComponent;
  let fixture: ComponentFixture<EmployersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
