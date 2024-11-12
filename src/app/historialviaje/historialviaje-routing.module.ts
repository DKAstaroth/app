import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialviajePage } from './historialviaje.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialviajePageRoutingModule {}
