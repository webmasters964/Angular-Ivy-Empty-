import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AdminComponent } from './admin.component';
// import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AdminComponent, AdminDashboardComponent, CrisesComponent, HeroesComponent } from '../shared/components'
import { AuthGuard } from '../auth/auth.guard';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'crises', component: CrisesComponent },
          { path: 'heroes', component: HeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const routedComponents = [
  AdminComponent, AdminDashboardComponent,
  CrisesComponent, HeroesComponent
]
