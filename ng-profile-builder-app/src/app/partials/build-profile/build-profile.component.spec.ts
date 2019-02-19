import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildProfileComponent } from './build-profile.component';

describe('BuildProfileComponent', () => {
  let component: BuildProfileComponent;
  let fixture: ComponentFixture<BuildProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
