import { TestBed, inject } from '@angular/core/testing';

import { SqlHandlerService } from './sql-handler.service';

describe('SqlHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SqlHandlerService]
    });
  });

  it('should be created', inject([SqlHandlerService], (service: SqlHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
