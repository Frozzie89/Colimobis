import { TestBed } from '@angular/core/testing';

import { RegimeDataService } from './regime-data.service';

describe('RegimeDataService', () => {
    let service: RegimeDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RegimeDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
