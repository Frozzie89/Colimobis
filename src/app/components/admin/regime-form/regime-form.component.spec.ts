import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeFormComponent } from './regime-form.component';

describe('RegimeFormComponent', () => {
    let component: RegimeFormComponent;
    let fixture: ComponentFixture<RegimeFormComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeFormComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
