import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuditListComponent } from './audit-list.component';

describe('AuditListComponent', () => {
    let component: AuditListComponent;
    let fixture: ComponentFixture<AuditListComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), AuditListComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AuditListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
