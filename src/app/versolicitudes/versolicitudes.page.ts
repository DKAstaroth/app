import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-versolicitudes',
  templateUrl: './versolicitudes.page.html',
  styleUrls: ['./versolicitudes.page.scss'],
})
export class VersolicitudesPage {
  solicitudes = [
    // Ejemplo de datos para ilustración. En una app real, estos vendrían de una base de datos o servicio.
    { destino: 'Centro', fecha: '2024-11-15', hora: '10:00', numeroPersonas: 3, ValorTotal: 15000 },
    { destino: 'Aeropuerto', fecha: '2024-11-16', hora: '08:00', numeroPersonas: 2, ValorTotal: 20000 },
  ];

  constructor(private alertController: AlertController, private router: Router) {}

  async aceptarSolicitud(solicitud: any) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas aceptar esta solicitud?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Solicitud aceptada:', solicitud);
            this.mostrarAlertaExito();
          },
        },
      ],
    });

    await alert.present();
  }

  async rechazarSolicitud(solicitud: any) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas rechazar esta solicitud?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Rechazar',
          handler: () => {
            this.solicitudes = this.solicitudes.filter(s => s !== solicitud);
            console.log('Solicitud rechazada:', solicitud);
          },
        },
      ],
    });

    await alert.present();
  }

  async mostrarAlertaExito() {
    const alert = await this.alertController.create({
      header: 'Solicitud Aceptada',
      message: 'Has aceptado la solicitud exitosamente.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/homeconductor']);
          },
        },
      ],
    });

    await alert.present();
  }
}
