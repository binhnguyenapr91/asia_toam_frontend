import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'host',
    loadChildren: () => import('../app/host/host.module').then(m => m.HostModule),
  },
  {
    path: 'renter',
    loadChildren: () => import('../app/renter/renter.module').then(m => m.RenterModule),
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
