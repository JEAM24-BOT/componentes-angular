import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-segundocomponente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segundocomponente.component.html',
  styleUrl: './segundocomponente.component.css'
})
export class SegundocomponenteComponent {

  contador = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
}
