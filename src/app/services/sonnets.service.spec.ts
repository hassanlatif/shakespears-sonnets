import { TestBed, inject } from '@angular/core/testing';

import { SonnetsService } from './sonnets.service';
import { HttpClientModule } from '@angular/common/http';

describe('SonnetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SonnetsService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([SonnetsService], (service: SonnetsService) => {
    expect(service).toBeTruthy();
  }));

  
});
