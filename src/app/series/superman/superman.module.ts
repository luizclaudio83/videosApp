import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupermanPageRoutingModule } from './superman-routing.module';

import { SupermanPage } from './superman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupermanPageRoutingModule
  ],
  declarations: [SupermanPage]
})
export class SupermanPageModule {}
