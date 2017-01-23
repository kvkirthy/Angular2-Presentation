/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataAccessService } from './data-access.service';

describe('DataAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataAccessService]
    });
  });

  it('should ...', inject([DataAccessService], (service: DataAccessService) => {
    expect(service).toBeTruthy();
  }));
});
