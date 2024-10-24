import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeRestoreComponent } from './regime-restore.component';

describe('RegimeRestoreComponent', () => {
    let component: RegimeRestoreComponent;
    let fixture: ComponentFixture<RegimeRestoreComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeRestoreComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeRestoreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
