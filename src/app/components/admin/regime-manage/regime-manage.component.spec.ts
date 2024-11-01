import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeManageComponent } from './regime-manage.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('RegimeManageComponent', () => {
    let component: RegimeManageComponent;
    let fixture: ComponentFixture<RegimeManageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeManageComponent],
            providers: [provideHttpClient(), provideRouter([])]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeManageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
