import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedListViewComponent } from './extended-list-view.component';

describe('ExtendedListViewComponent', () => {
  let component: ExtendedListViewComponent;
  let fixture: ComponentFixture<ExtendedListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
