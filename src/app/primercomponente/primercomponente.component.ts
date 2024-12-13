import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-primercomponente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primercomponente.component.html',
  styleUrl: './primercomponente.component.css'
})
export class PrimercomponenteComponent {

  usuario = {
    nombre: 'Juan Pérez',
    edad: 28,
    ocupacion: 'Desarrollador de Software'
  };
}
