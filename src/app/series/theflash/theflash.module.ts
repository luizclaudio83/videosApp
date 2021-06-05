import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheflashPageRoutingModule } from './theflash-routing.module';

import { TheflashPage } from './theflash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheflashPageRoutingModule
  ],
  declarations: [TheflashPage]
})
export class TheflashPageModule {}
