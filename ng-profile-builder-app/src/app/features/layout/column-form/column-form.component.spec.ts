import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnFormComponent } from './column-form.component';

describe('ColumnFormComponent', () => {
  let component: ColumnFormComponent;
  let fixture: ComponentFixture<ColumnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
