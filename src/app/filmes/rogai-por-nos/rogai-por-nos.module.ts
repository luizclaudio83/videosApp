import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RogaiPorNosPageRoutingModule } from './rogai-por-nos-routing.module';

import { RogaiPorNosPage } from './rogai-por-nos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RogaiPorNosPageRoutingModule
  ],
  declarations: [RogaiPorNosPage]
})
export class RogaiPorNosPageModule {}
