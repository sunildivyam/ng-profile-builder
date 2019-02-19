import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalsFormComponent } from './additionals-form.component';

describe('AdditionalFormComponent', () => {
  let component: AdditionalsFormComponent;
  let fixture: ComponentFixture<AdditionalsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
