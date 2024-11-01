import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeFormComponent } from './regime-form.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('RegimeFormComponent', () => {
    let component: RegimeFormComponent;
    let fixture: ComponentFixture<RegimeFormComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeFormComponent],
            providers: [provideRouter([]), provideHttpClient()]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
