import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegimeSearchComponent } from './components/regime-search/regime-search.component';
import { RegimeListComponent } from './components/regime-list/regime-list.component';
import { RegimeWithdrawComponent } from './components/action/regime-withdraw/regime-withdraw.component';
import { RegimeRestoreComponent } from './components/action/regime-restore/regime-restore.component';
import { AdminHubComponent } from './components/admin/admin-hub/admin-hub.component';
import { RegimeManageComponent } from './components/admin/regime-manage/regime-manage.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'regime-search', component: RegimeSearchComponent },
    { path: 'regime-list/:search', component: RegimeListComponent },
    { path: 'action/regime-withdraw/:id', component: RegimeWithdrawComponent },
    { path: 'action/regime-restore/:id', component: RegimeRestoreComponent },
    { path: 'admin', component: AdminHubComponent },
    { path: 'admin/regime-manage', component: RegimeManageComponent },
    { path: '**', component: LoginComponent }
];
