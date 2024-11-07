import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeWithdrawEndComponent } from './regime-withdraw-end.component';

describe('RegimeWithdrawEndComponent', () => {
    let component: RegimeWithdrawEndComponent;
    let fixture: ComponentFixture<RegimeWithdrawEndComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeWithdrawEndComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeWithdrawEndComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
