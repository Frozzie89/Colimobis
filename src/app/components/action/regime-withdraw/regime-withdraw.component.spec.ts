import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeWithdrawComponent } from './regime-withdraw.component';

describe('RegimeWithdrawComponent', () => {
    let component: RegimeWithdrawComponent;
    let fixture: ComponentFixture<RegimeWithdrawComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeWithdrawComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeWithdrawComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
