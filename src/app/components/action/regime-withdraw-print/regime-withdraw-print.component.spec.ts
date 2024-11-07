import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeWithdrawPrintComponent } from './regime-withdraw-print.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { provideHttpClient } from '@angular/common/http';

describe('RegimeWithdrawPrintComponent', () => {
    let component: RegimeWithdrawPrintComponent;
    let fixture: ComponentFixture<RegimeWithdrawPrintComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeWithdrawPrintComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            params: of({ id: '0' })
                        }
                    }
                },
                provideHttpClient()]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeWithdrawPrintComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
