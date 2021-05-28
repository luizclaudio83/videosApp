import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RogaiPorNosPage } from './rogai-por-nos.page';

const routes: Routes = [
  {
    path: '',
    component: RogaiPorNosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RogaiPorNosPageRoutingModule {}
