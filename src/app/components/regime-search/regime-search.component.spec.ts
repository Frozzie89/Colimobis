import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeSearchComponent } from './regime-search.component';
import { provideHttpClient } from '@angular/common/http';

describe('RegimeSearchComponent', () => {
    let component: RegimeSearchComponent;
    let fixture: ComponentFixture<RegimeSearchComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeSearchComponent],
            providers: [provideHttpClient()]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
