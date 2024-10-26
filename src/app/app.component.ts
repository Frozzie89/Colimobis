import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
    constructor() {
        this.initApp()
    }


    initApp() {
        StatusBar.setBackgroundColor({ color: '#00008b' })
        StatusBar.hide()
        StatusBar.setOverlaysWebView({ overlay: true })
    }
}
