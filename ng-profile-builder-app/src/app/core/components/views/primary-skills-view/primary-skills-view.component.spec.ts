import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySkillsViewComponent } from './primary-skills-view.component';

describe('PrimarySkillsViewComponent', () => {
  let component: PrimarySkillsViewComponent;
  let fixture: ComponentFixture<PrimarySkillsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarySkillsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarySkillsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
