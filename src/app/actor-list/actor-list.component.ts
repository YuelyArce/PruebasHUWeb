import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { Actor } from '../models/actor';




@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actores = [];

  constructor(private actorService: ActorService) {}

  ngOnInit() {
    this.actores = this.actorService.obtenerActores(); // Simulación de datos obtenidos del servicio
  }

  verDetalleActor(id: number) {
    // Lógica para navegar a la página de detalles del actor
  }

  paginaSiguiente() { /* Lógica para avanzar de página */ }
  paginaAnterior() { /* Lógica para retroceder de página */ }
}

