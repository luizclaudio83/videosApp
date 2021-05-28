import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LigaDaJusticaPageRoutingModule } from './liga-da-justica-routing.module';

import { LigaDaJusticaPage } from './liga-da-justica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LigaDaJusticaPageRoutingModule
  ],
  declarations: [LigaDaJusticaPage]
})
export class LigaDaJusticaPageModule {}
