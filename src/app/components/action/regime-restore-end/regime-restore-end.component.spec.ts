import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeRestoreEndComponent } from './regime-restore-end.component';

describe('RegimeRestoreEndComponent', () => {
    let component: RegimeRestoreEndComponent;
    let fixture: ComponentFixture<RegimeRestoreEndComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeRestoreEndComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeRestoreEndComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
