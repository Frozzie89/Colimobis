import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminHubComponent } from './admin-hub.component';
import { provideRouter } from '@angular/router';

describe('AdminHubComponent', () => {
    let component: AdminHubComponent;
    let fixture: ComponentFixture<AdminHubComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), AdminHubComponent],
            providers: [provideRouter([])]
        }).compileComponents();

        fixture = TestBed.createComponent(AdminHubComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
