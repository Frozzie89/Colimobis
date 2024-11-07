import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndFormComponent } from './end-form.component';

describe('EndFormComponent', () => {
    let component: EndFormComponent;
    let fixture: ComponentFixture<EndFormComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), EndFormComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(EndFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
