import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationViewComponent } from './education-view.component';

describe('EducationViewComponent', () => {
  let component: EducationViewComponent;
  let fixture: ComponentFixture<EducationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
