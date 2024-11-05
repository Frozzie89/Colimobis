import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeRestoreComponent } from './regime-restore.component';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { RegimeState } from 'src/app/classes/regime';

describe('RegimeRestoreComponent', () => {
    let component: RegimeRestoreComponent
    let fixture: ComponentFixture<RegimeRestoreComponent>
    let regimeService: jasmine.SpyObj<RegimeDataService>

    const mockRegimeJson = { id: '0', requestNumber: '1234', ot: 1, rf: '1', label: 'test', state: RegimeState.DEMARRE }

    beforeEach(waitForAsync(() => {
        const regimeServiceSpy = jasmine.createSpyObj('RegimeDataService', ['regimeList$'])
        regimeServiceSpy.regimeList$ = of([mockRegimeJson])

        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeRestoreComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            params: of({ id: '0' })
                        }
                    }
                }
                , RegimeDataService, provideHttpClient()]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeRestoreComponent);
        component = fixture.componentInstance;
        regimeService = TestBed.inject(RegimeDataService) as jasmine.SpyObj<RegimeDataService>;

        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
