import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvencivelPage } from './invencivel.page';

const routes: Routes = [
  {
    path: '',
    component: InvencivelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvencivelPageRoutingModule {}
