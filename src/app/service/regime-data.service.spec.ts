import { TestBed } from '@angular/core/testing';

import { RegimeDataService } from './regime-data.service';
import { provideHttpClient } from '@angular/common/http';

describe('RegimeDataService', () => {
    let service: RegimeDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient()]
        });
        service = TestBed.inject(RegimeDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
