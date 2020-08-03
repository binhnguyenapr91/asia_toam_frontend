import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {HostRoutingModule} from './host-routing/host-routing.module';


@NgModule({
  declarations: [HostDashboardComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    HostRoutingModule
  ]
})
export class HostModule { }
