import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaMiraDoPerigoPage } from './na-mira-do-perigo.page';

const routes: Routes = [
  {
    path: '',
    component: NaMiraDoPerigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaMiraDoPerigoPageRoutingModule {}
