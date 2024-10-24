import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeStatusComponent } from './regime-status.component';

describe('RegimeStatusComponent', () => {
    let component: RegimeStatusComponent;
    let fixture: ComponentFixture<RegimeStatusComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeStatusComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeStatusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
