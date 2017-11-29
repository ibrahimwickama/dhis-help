import { TestBed, inject } from '@angular/core/testing';

import { DhisHelpService } from './dhis-help.service';

describe('DhisHelpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DhisHelpService]
    });
  });

  it('should be created', inject([DhisHelpService], (service: DhisHelpService) => {
    expect(service).toBeTruthy();
  }));
});
