import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSmallViewComponent } from './projects-small-view.component';

describe('ProjectsSmallViewComponent', () => {
  let component: ProjectsSmallViewComponent;
  let fixture: ComponentFixture<ProjectsSmallViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsSmallViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSmallViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
