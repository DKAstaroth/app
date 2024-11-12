import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homeconductor',
  templateUrl: 'homeconductor.page.html',
  styleUrls: ['homeconductor.page.scss'],
})
export class HomeconductorPage {

  constructor(private navCtrl: NavController) {}

  // Método para ofrecer un viaje
  offerRide() {
    console.log('Ofrecer viaje');
    this.navCtrl.navigateForward('/ofrecer-viaje');
  }

  // Método para ver el historial de viajes
  viewRideHistory() {
    console.log('Ver historial de viajes');
    this.navCtrl.navigateForward('/historialviaje');
  }

  // 
  viewStudentsLookingForRides() {
    console.log('Ver solicitudes de los estudiantes');
    this.navCtrl.navigateForward('/versolicitudes');
  }
}
