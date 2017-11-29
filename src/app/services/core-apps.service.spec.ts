import { TestBed, inject } from '@angular/core/testing';

import { CoreAppsService } from './core-apps.service';

describe('CoreAppsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreAppsService]
    });
  });

  it('should be created', inject([CoreAppsService], (service: CoreAppsService) => {
    expect(service).toBeTruthy();
  }));
});
