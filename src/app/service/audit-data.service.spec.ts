import { TestBed } from '@angular/core/testing';

import { AuditDataService } from './audit-data.service';

describe('AuditDataService', () => {
    let service: AuditDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuditDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
