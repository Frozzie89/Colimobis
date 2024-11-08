import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { of } from 'rxjs';
import { RegimeRestoreComponent } from '../regime-restore/regime-restore.component';

describe('RegimeRestoreComponent', () => {
    let component: RegimeRestoreComponent;
    let fixture: ComponentFixture<RegimeRestoreComponent>;
    let mockActivatedRoute;
    let mockRouter: { navigate: any; };
    let mockRegimeService;

    beforeEach(() => {
        mockActivatedRoute = {
            snapshot: {
                params: { id: 'test-id' }
            }
        };

        mockRouter = jasmine.createSpyObj(['navigate']);

        mockRegimeService = jasmine.createSpyObj('RegimeDataService', ['regimeList$']);
        mockRegimeService.regimeList$ = of([
            { _id: 'test-id' }
        ]);

        TestBed.configureTestingModule({
            imports: [RegimeRestoreComponent],
            providers: [
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
                { provide: Router, useValue: mockRouter },
                { provide: RegimeDataService, useValue: mockRegimeService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeRestoreComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
