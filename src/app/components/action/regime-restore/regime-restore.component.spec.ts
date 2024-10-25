import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegimeRestoreComponent } from './regime-restore.component';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('RegimeRestoreComponent', () => {
    let component: RegimeRestoreComponent;
    let fixture: ComponentFixture<RegimeRestoreComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RegimeRestoreComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            params: of({ id: '0' })
                        }
                    }
                }
                , provideHttpClient()]
        }).compileComponents();

        fixture = TestBed.createComponent(RegimeRestoreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
