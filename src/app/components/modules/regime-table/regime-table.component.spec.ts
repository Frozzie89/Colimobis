import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeTableComponent } from './regime-table.component';

describe('RegimeTableComponent', () => {
    let component: RegimeTableComponent;
    let fixture: ComponentFixture<RegimeTableComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeTableComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
