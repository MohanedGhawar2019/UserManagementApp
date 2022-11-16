import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRolesComponent } from './all-roles/all-roles.component';

const routes: Routes = [{ path: '', component: AllRolesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesRoutingModule {}
