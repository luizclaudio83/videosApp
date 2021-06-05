import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvencivelPageRoutingModule } from './invencivel-routing.module';

import { InvencivelPage } from './invencivel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvencivelPageRoutingModule
  ],
  declarations: [InvencivelPage]
})
export class InvencivelPageModule {}
