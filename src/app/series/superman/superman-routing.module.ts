import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupermanPage } from './superman.page';

const routes: Routes = [
  {
    path: '',
    component: SupermanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupermanPageRoutingModule {}
