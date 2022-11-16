import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashHomeRoutingModule } from './dash-home-routing.module';
import { DashHomeComponent } from './dash-home/dash-home.component';


@NgModule({
  declarations: [
    DashHomeComponent
  ],
  imports: [
    CommonModule,
    DashHomeRoutingModule
  ]
})
export class DashHomeModule { }
