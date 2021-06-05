import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lucifer',
    loadChildren: () => import('./series/lucifer/lucifer.module').then( m => m.LuciferPageModule)
  },
  {
    path: 'theflash',
    loadChildren: () => import('./series/theflash/theflash.module').then( m => m.TheflashPageModule)
  },
  {
    path: 'thegooddoctor',
    loadChildren: () => import('./series/thegooddoctor/thegooddoctor.module').then( m => m.ThegooddoctorPageModule)
  },
  {
    path: 'superman',
    loadChildren: () => import('./series/superman/superman.module').then( m => m.SupermanPageModule)
  },
  {
    path: 'invencivel',
    loadChildren: () => import('./series/invencivel/invencivel.module').then( m => m.InvencivelPageModule)
  },
  {
    path: 'dados-serie',
    loadChildren: () => import('./dados-serie/dados-serie.module').then( m => m.DadosSeriePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
