import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeWithdrawComponent } from './regime-withdraw.component';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { RegimeState } from 'src/app/classes/regime';

describe('RegimeWithdrawComponent', () => {
    let component: RegimeWithdrawComponent;
    let fixture: ComponentFixture<RegimeWithdrawComponent>;
    let regimeService: RegimeDataService

    const mockRegimeJson = { id: '0', requestNumber: '1234', ot: 1, rf: '1', label: 'test', state: RegimeState.DEMARRE }

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeWithdrawComponent],
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

        fixture = TestBed.createComponent(RegimeWithdrawComponent);
        component = fixture.componentInstance;
        regimeService = TestBed.inject(RegimeDataService)

        spyOn(regimeService.regimeList, 'find').and.returnValue(mockRegimeJson)

        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
