import { TestBed, inject } from '@angular/core/testing';

import { PetService } from './pet.service';

describe('PetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetService]
    });
  });

  it('should ...', inject([PetService], (service: PetService) => {
    expect(service).toBeTruthy();
  }));
});
