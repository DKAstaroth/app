import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersolicitudesPageRoutingModule } from './versolicitudes-routing.module';

import { VersolicitudesPage } from './versolicitudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersolicitudesPageRoutingModule
  ],
  declarations: [VersolicitudesPage]
})
export class VersolicitudesPageModule {}
