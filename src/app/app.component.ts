import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimercomponenteComponent } from './primercomponente/primercomponente.component';
import { SegundocomponenteComponent } from './segundocomponente/segundocomponente.component';
import { TercercomponenteComponent } from './tercercomponente/tercercomponente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimercomponenteComponent, SegundocomponenteComponent, TercercomponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
