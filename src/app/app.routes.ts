import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegimeSearchComponent } from './components/regime-search/regime-search.component';
import { RegimeListComponent } from './components/regime-list/regime-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'regime-search', component: RegimeSearchComponent },
    { path: 'regime-list/:search', component: RegimeListComponent },
    { path: '**', component: LoginComponent }
];
