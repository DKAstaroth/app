import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

// Definición de la interfaz para los viajes
interface Viaje {
  id: number;
  ruta: string;
  conductor: string;
  horario: string;
  costo: number;
}

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.page.html',
  styleUrls: ['./mis-viajes.page.scss'],
})
export class MisViajesPage {


  // Array de viajes solicitados con ejemplos
  viajesSolicitados: Viaje[] = [
    { id: 1, ruta: 'Coronel a DuocUC', conductor: 'Carlos Ríos', horario: '19:00', costo: 2000 },
    { id: 2, ruta: 'Chillán a DuocUC', conductor: 'Sofía Martínez', horario: '22:00', costo: 2500 },
    { id: 3, ruta: 'Mall del centro a DuocUC', conductor: 'Fernando Gómez', horario: '19:30', costo: 2000 },
    { id: 4, ruta: 'San Pedro a DuocUC', conductor: 'Lucía Fernández', horario: '22:30', costo: 2500 },
  ];

  constructor(private alertController: AlertController, private navController: NavController) {
    // Inicialización de datos
  }



  // Método para aceptar un viaje ofrecido
  async aceptarViaje(id: number): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Viaje Aceptado',
      message: 'El viaje ofrecido fue aceptado con éxito.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navController.navigateRoot('/home'); // Redirigir a la página de inicio
        }
      }]
    });

    await alert.present();
  }

  // Método para aceptar una solicitud de viaje
  async aceptarSolicitud(id: number): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Solicitud Aceptada',
      message: 'La solicitud de viaje fue aceptada con éxito.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navController.navigateRoot('/home'); // Redirigir a la página de inicio
        }
      }]
    });

    await alert.present();
  }

  // Método para cancelar una solicitud de viaje
  cancelarSolicitud(id: number): void {
    this.viajesSolicitados = this.viajesSolicitados.filter(viaje => viaje.id !== id);
  }
}
