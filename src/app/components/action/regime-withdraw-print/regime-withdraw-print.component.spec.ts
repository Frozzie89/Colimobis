import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeWithdrawPrintComponent } from './regime-withdraw-print.component';

describe('RegimeWithdrawPrintComponent', () => {
    let component: RegimeWithdrawPrintComponent;
    let fixture: ComponentFixture<RegimeWithdrawPrintComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeWithdrawPrintComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeWithdrawPrintComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
