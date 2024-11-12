import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomeconductorPageRoutingModule } from './homeconductor-routing.module';
import { HomeconductorPage } from './homeconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeconductorPageRoutingModule
  ],
  declarations: [HomeconductorPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agregamos el esquema para reconocer componentes personalizados
})
export class HomeconductorPageModule {}
