import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMediumViewComponent } from './projects-medium-view.component';

describe('ProjectsMediumViewComponent', () => {
  let component: ProjectsMediumViewComponent;
  let fixture: ComponentFixture<ProjectsMediumViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsMediumViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsMediumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
