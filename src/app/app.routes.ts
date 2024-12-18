import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegimeSearchComponent } from './components/regime-search/regime-search.component';
import { RegimeListComponent } from './components/regime-list/regime-list.component';
import { RegimeWithdrawComponent } from './components/action/regime-withdraw/regime-withdraw.component';
import { RegimeRestoreComponent } from './components/action/regime-restore/regime-restore.component';
import { AdminHubComponent } from './components/admin/admin-hub/admin-hub.component';
import { RegimeManageComponent } from './components/admin/regime-manage/regime-manage.component';
import { RegimeFormComponent } from './components/admin/regime-form/regime-form.component';
import { RegimeWithdrawPrintComponent } from './components/action/regime-withdraw-print/regime-withdraw-print.component';
import { RegimeWithdrawEndComponent } from './components/action/regime-withdraw-end/regime-withdraw-end.component';
import { RegimeRestoreEndComponent } from './components/action/regime-restore-end/regime-restore-end.component';
import { AuditListComponent } from './components/admin/audit-list/audit-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'regime-search', component: RegimeSearchComponent },
    { path: 'regime-list/:search', component: RegimeListComponent },
    { path: 'action/regime-withdraw/:id', component: RegimeWithdrawComponent },
    { path: 'action/regime-withdraw/:id/print', component: RegimeWithdrawPrintComponent },
    { path: 'action/regime-withdraw/:id/end', component: RegimeWithdrawEndComponent },
    { path: 'action/regime-restore/:id', component: RegimeRestoreComponent },
    { path: 'action/regime-restore/:id/end', component: RegimeRestoreEndComponent },
    { path: 'admin', component: AdminHubComponent },
    { path: 'admin/regime-manage', component: RegimeManageComponent },
    { path: 'admin/regime-manage/regime-form', component: RegimeFormComponent },
    { path: 'admin/regime-manage/regime-form/:id/:action', component: RegimeFormComponent },
    { path: 'admin/audit-list', component: AuditListComponent },
    { path: '**', component: LoginComponent }
];
