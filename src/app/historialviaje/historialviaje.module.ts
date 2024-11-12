import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialviajePageRoutingModule } from './historialviaje-routing.module';

import { HistorialviajePage } from './historialviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialviajePageRoutingModule
  ],
  declarations: [HistorialviajePage]
})
export class HistorialviajePageModule {}
