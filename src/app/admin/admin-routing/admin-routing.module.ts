import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from '../admin-dashboard/admin-dashboard.component';
import {ManagerAccountsComponent} from '../manager-accounts/manager-accounts.component';
import {ManagerPropertiesComponent} from '../manager-properties/manager-properties.component';
import {ManagerContractsComponent} from '../manager-contracts/manager-contracts.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'managerAccounts',
        component: ManagerAccountsComponent
      },
      {
        path: 'managerProperties',
        component: ManagerPropertiesComponent
      },
      {
        path: 'managerContracts',
        component: ManagerContractsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
