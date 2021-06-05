import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThegooddoctorPage } from './thegooddoctor.page';

const routes: Routes = [
  {
    path: '',
    component: ThegooddoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThegooddoctorPageRoutingModule {}
