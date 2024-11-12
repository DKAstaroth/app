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
  selector: 'app-historialviaje',
  templateUrl: './historialviaje.page.html',
  styleUrls: ['./historialviaje.page.scss'],
})
export class HistorialviajePage {
  // Array de viajes ofrecidos (Historial de viajes)
  viajesOfrecidos: Viaje[] = [
    { id: 1, ruta: 'DuocUC a Coronel', conductor: 'Juan Pérez', horario: '18:00', costo: 2000 },
    { id: 2, ruta: 'DuocUC a Chillán', conductor: 'María López', horario: '21:00', costo: 2500 },
    { id: 3, ruta: 'DuocUC a Mall del centro', conductor: 'Ana Torres', horario: '18:30', costo: 2000 },
    { id: 4, ruta: 'DuocUC a San Pedro', conductor: 'Luis García', horario: '21:30', costo: 2500 },
  ];

  constructor(private alertController: AlertController, private navController: NavController) {}

  // Método para cancelar un viaje ofrecido
  cancelarViaje(id: number): void {
    this.viajesOfrecidos = this.viajesOfrecidos.filter(viaje => viaje.id !== id);
  }

  // Método para aceptar un viaje ofrecido
  async aceptarViaje(id: number): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Viaje Aceptado',
      message: 'El viaje ofrecido fue aceptado con éxito.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navController.navigateRoot('/homeconductor'); // Redirigir a la página de inicio
        }
      }]
    });

    await alert.present();
  }
}
