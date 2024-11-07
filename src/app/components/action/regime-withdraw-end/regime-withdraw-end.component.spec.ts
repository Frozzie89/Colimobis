import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeWithdrawEndComponent } from './regime-withdraw-end.component';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { RegimeDataService } from 'src/app/service/regime-data.service';
import { Regime, RegimeState } from 'src/app/classes/regime';

describe('RegimeWithdrawEndComponent', () => {
    let component: RegimeWithdrawEndComponent;
    let fixture: ComponentFixture<RegimeWithdrawEndComponent>;
    let regimeService: RegimeDataService;

    const mockRegimeJson = { _id: '0', requestNumber: '1234', ot: 1, rf: '1', label: 'test', state: RegimeState.DEMARRE }


    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeWithdrawEndComponent],
            providers: [{
                provide: ActivatedRoute,
                useValue: {
                    snapshot: {
                        params: of({ id: '0' })
                    }
                }
            }, provideHttpClient()]
        }).compileComponents();

        spyOn(Regime, 'fromJson').and.callFake((json) => json ? json : new Regime());

        fixture = TestBed.createComponent(RegimeWithdrawEndComponent);
        component = fixture.componentInstance;
        regimeService = TestBed.inject(RegimeDataService) as jasmine.SpyObj<RegimeDataService>;

        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
