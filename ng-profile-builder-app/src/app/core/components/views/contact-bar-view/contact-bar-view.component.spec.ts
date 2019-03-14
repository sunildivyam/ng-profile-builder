import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBarViewComponent } from './contact-bar-view.component';

describe('ContactBarViewComponent', () => {
  let component: ContactBarViewComponent;
  let fixture: ComponentFixture<ContactBarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
