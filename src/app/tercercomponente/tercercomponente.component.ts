import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercercomponente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tercercomponente.component.html',
  styleUrl: './tercercomponente.component.css'
})
export class TercercomponenteComponent {

  articulos = [
    { nombre: 'Artículo 1', descripcion: 'Descripción del artículo 1', favorito: false },
    { nombre: 'Artículo 2', descripcion: 'Descripción del artículo 2', favorito: false },
    { nombre: 'Artículo 3', descripcion: 'Descripción del artículo 3', favorito: false }
  ];

  marcarFavorito(articulo: any) {
    articulo.favorito = !articulo.favorito;
  }
}
