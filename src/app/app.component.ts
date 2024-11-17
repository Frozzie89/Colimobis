import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { RegimeDataService } from './service/regime-data.service';
import { Platform } from '@ionic/angular';
import { AuditDataService } from './service/audit-data.service';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private regimeService: RegimeDataService,
        private auditService: AuditDataService
    ) {
        this.initApp()
    }

    async initApp() {
        if (this.platform.is('capacitor')) {
            StatusBar.setBackgroundColor({ color: '#00008b' })
            StatusBar.hide()
            StatusBar.setOverlaysWebView({ overlay: true })
        }

        await this.regimeService.getAllRegimes()
        await this.auditService.cleanOldAudits()
        SplashScreen.hide()
    }
}
