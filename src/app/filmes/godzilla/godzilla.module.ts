import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GodzillaPageRoutingModule } from './godzilla-routing.module';

import { GodzillaPage } from './godzilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GodzillaPageRoutingModule
  ],
  declarations: [GodzillaPage]
})
export class GodzillaPageModule {}
