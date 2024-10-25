import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeDescriptionComponent } from './regime-description.component';

describe('RegimeDescriptionComponent', () => {
    let component: RegimeDescriptionComponent;
    let fixture: ComponentFixture<RegimeDescriptionComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeDescriptionComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeDescriptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
