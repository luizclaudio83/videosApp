import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuciferPage } from './lucifer.page';

const routes: Routes = [
  {
    path: '',
    component: LuciferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuciferPageRoutingModule {}
