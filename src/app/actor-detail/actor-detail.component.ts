import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from '../actor.service';
import { Actor } from '../models/actor';



@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: []
})
export class ActorDetailComponent implements OnInit {
  actor: Actor | undefined; // Permitir que actor sea indefinido

  constructor(private route: ActivatedRoute, private actorService: ActorService) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.actor = this.actorService.obtenerActorPorId(id); // Simulación de datos obtenidos del servicio
  }

  regresar() {
    // Lógica para regresar al listado de actores
  }
}
