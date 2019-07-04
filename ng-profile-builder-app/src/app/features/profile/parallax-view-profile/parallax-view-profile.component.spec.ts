import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxViewProfileComponent } from './parallax-view-profile.component';

describe('ParallaxViewProfileComponent', () => {
  let component: ParallaxViewProfileComponent;
  let fixture: ComponentFixture<ParallaxViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
