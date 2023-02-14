import { TestBed } from '@angular/core/testing';

import { ProduitformService } from './produitform.service';

describe('ProduitformService', () => {
  let service: ProduitformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
