import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalsViewComponent } from './additionals-view.component';

describe('AdditionalViewComponent', () => {
  let component: AdditionalsViewComponent;
  let fixture: ComponentFixture<AdditionalsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
