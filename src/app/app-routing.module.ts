import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mortal-kombat',
    loadChildren: () => import('./filmes/mortal-kombat/mortal-kombat.module').then( m => m.MortalKombatPageModule)
  },
  {
    path: 'rogai-por-nos',
    loadChildren: () => import('./filmes/rogai-por-nos/rogai-por-nos.module').then( m => m.RogaiPorNosPageModule)
  },
  {
    path: 'na-mira-do-perigo',
    loadChildren: () => import('./filmes/na-mira-do-perigo/na-mira-do-perigo.module').then( m => m.NaMiraDoPerigoPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
