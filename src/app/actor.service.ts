import { Injectable } from '@angular/core';
import { Actor } from './models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  obtenerActores(): Actor[] {
    return [
      { id: 1, nombre: 'Actor 1', nacionalidad: 'País 1', imagen: 'imagen1.jpg' },
      { id: 2, nombre: 'Actor 2', nacionalidad: 'País 2', imagen: 'imagen2.jpg' }
    ];
  }

  obtenerActorPorId(id: number): Actor {
    return this.obtenerActores().find(actor => actor.id === id);
  }
}
