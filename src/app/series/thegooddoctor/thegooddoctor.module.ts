import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThegooddoctorPageRoutingModule } from './thegooddoctor-routing.module';

import { ThegooddoctorPage } from './thegooddoctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThegooddoctorPageRoutingModule
  ],
  declarations: [ThegooddoctorPage]
})
export class ThegooddoctorPageModule {}
