import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage {

  constructor(private router: Router) {}

  seleccionarConductor() {
    this.router.navigate(['/homeconductor']);
  }

  seleccionarViajero() {
    this.router.navigate(['/home']); // Ajusta esta ruta si la página para "Viajar como Estudiante" tiene un nombre específico
  }
}
