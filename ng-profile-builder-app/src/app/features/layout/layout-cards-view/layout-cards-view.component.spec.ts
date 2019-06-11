import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCardsViewComponent } from './layout-cards-view.component';

describe('LayoutCardsViewComponent', () => {
  let component: LayoutCardsViewComponent;
  let fixture: ComponentFixture<LayoutCardsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCardsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
