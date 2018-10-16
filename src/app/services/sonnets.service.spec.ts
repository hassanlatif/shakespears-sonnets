import { TestBed, getTestBed, inject } from '@angular/core/testing';

import { SonnetsService } from './sonnets.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SonnetsService', () => {

  let injector: TestBed;
  let service: SonnetsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SonnetsService],
      imports: [HttpClientTestingModule]
    });

    injector = getTestBed();
    service = injector.get(SonnetsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', inject([SonnetsService], (service: SonnetsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observabel<Sonnets[]>', () => {

    const mockResponse =
      [
        { number: '1', lines: ['abc', 'def', 'ghi'] },
        { number: '2', lines: ['jkl', 'mno', 'pqr'] },
        { number: '3', lines: ['stu', 'vwx', 'yz'] }
      ];

    service.getSonnets().subscribe(sonnets => {
      expect(sonnets.length).toBe(3);
      expect(sonnets[0].number).toEqual('1');
      expect(sonnets[1].number).toEqual('2');
      expect(sonnets[2].number).toEqual('3');
    });

    const req = httpMock.expectOne('./assets/shakespearesSonnets.json');
    expect(req.request.method).toBe("GET");
    req.flush(mockResponse);

  });

});
