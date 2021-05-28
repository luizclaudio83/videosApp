import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LigaDaJusticaPage } from './liga-da-justica.page';

const routes: Routes = [
  {
    path: '',
    component: LigaDaJusticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LigaDaJusticaPageRoutingModule {}
