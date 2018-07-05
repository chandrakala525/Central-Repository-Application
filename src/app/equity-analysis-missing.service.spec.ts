import { TestBed, inject } from '@angular/core/testing';

import { EquityAnalysisMissingService } from './equity-analysis-missing.service';

describe('EquityAnalysisMissingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquityAnalysisMissingService]
    });
  });

  it('should be created', inject([EquityAnalysisMissingService], (service: EquityAnalysisMissingService) => {
    expect(service).toBeTruthy();
  }));
});
