import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EndFormComponent } from './end-form.component';
import { Router } from '@angular/router';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;


describe('EndFormComponent', () => {
    let component: EndFormComponent;
    let fixture: ComponentFixture<EndFormComponent>;
    let routerSpy: jasmine.SpyObj<Router>;

    beforeEach(waitForAsync(() => {
        routerSpy = jasmine.createSpyObj('Router', ['navigate']);

        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), EndFormComponent],
            providers: [{ provide: Router, useValue: routerSpy }]
        }).compileComponents();

        fixture = TestBed.createComponent(EndFormComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
