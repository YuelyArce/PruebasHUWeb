export interface Actor {
  id: number;
  nombre: string;
  nacionalidad: string;
  biografia: string;
  peliculas: string[]; // O el tipo que desees para representar las películas
  imagen: string; // URL de la imagen del actor
}
