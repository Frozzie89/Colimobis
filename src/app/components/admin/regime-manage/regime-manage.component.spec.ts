import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeManageComponent } from './regime-manage.component';

describe('RegimeManageComponent', () => {
    let component: RegimeManageComponent;
    let fixture: ComponentFixture<RegimeManageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeManageComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeManageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
