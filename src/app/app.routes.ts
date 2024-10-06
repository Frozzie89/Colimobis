import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegimeSearchComponent } from './regime-search/regime-search.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'regime-search', component: RegimeSearchComponent },
    { path: '**', component: LoginComponent }
];
