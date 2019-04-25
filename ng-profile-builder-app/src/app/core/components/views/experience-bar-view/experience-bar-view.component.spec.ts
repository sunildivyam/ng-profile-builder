import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceBarViewComponent } from './experience-bar-view.component';

describe('ExperienceBarViewComponent', () => {
  let component: ExperienceBarViewComponent;
  let fixture: ComponentFixture<ExperienceBarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceBarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceBarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
