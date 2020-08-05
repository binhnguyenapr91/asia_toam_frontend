import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HostDashboardComponent} from '../host-dashboard/host-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HostDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class HostRoutingModule { }
