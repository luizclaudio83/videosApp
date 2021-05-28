import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GodzillaPage } from './godzilla.page';

const routes: Routes = [
  {
    path: '',
    component: GodzillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodzillaPageRoutingModule {}
