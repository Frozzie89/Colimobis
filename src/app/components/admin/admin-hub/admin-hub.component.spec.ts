import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminHubComponent } from './admin-hub.component';

describe('AdminHubComponent', () => {
    let component: AdminHubComponent;
    let fixture: ComponentFixture<AdminHubComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), AdminHubComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AdminHubComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
