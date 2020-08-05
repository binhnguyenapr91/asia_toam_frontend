import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {RenterRoutingModule} from './renter-routing/renter-routing.module';


@NgModule({
  declarations: [RenterDashboardComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    RenterRoutingModule
  ]
})
export class RenterModule { }
