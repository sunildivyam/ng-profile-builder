import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLayoutsComponent } from './manage-layouts.component';

describe('ManageLayoutsComponent', () => {
  let component: ManageLayoutsComponent;
  let fixture: ComponentFixture<ManageLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
