import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedListFormComponent } from './extended-list-form.component';

describe('ExtendedListFormComponent', () => {
  let component: ExtendedListFormComponent;
  let fixture: ComponentFixture<ExtendedListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
