import { TestBed } from '@angular/core/testing';

import { ProfileViewService } from './profile-view.service';

describe('ProfileViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileViewService = TestBed.get(ProfileViewService);
    expect(service).toBeTruthy();
  });
});
