import { TestBed } from '@angular/core/testing';

import { CardToShowService } from './card-to-show.service';

describe('CardToShowService', () => {
  let service: CardToShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardToShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
