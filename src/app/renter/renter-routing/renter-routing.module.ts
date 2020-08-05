import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RenterDashboardComponent} from '../renter-dashboard/renter-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: RenterDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RenterRoutingModule { }
