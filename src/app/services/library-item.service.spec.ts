import { TestBed } from '@angular/core/testing';

import { LibraryItemService } from './library-item.service';

describe('LibraryItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryItemService = TestBed.get(LibraryItemService);
    expect(service).toBeTruthy();
  });
});
