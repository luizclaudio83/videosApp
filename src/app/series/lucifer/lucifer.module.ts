import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuciferPageRoutingModule } from './lucifer-routing.module';

import { LuciferPage } from './lucifer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuciferPageRoutingModule
  ],
  declarations: [LuciferPage]
})
export class LuciferPageModule {}
