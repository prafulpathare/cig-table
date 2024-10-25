import { TestBed } from '@angular/core/testing';

import { CigTableService } from './cig-table.service';

describe('CigTableService', () => {
  let service: CigTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CigTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
