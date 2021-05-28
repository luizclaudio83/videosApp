import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaMiraDoPerigoPageRoutingModule } from './na-mira-do-perigo-routing.module';

import { NaMiraDoPerigoPage } from './na-mira-do-perigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaMiraDoPerigoPageRoutingModule
  ],
  declarations: [NaMiraDoPerigoPage]
})
export class NaMiraDoPerigoPageModule {}
