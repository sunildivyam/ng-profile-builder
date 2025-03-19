import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySkillsModernViewComponent } from './primary-skills-modern-view.component';

describe('PrimarySkillsModernViewComponent', () => {
  let component: PrimarySkillsModernViewComponent;
  let fixture: ComponentFixture<PrimarySkillsModernViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrimarySkillsModernViewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarySkillsModernViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
