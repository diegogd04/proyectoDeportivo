import { Injectable } from '@angular/core';
import { partidos } from '../models/MockPartidos';
import { Partido } from '../models/Partido';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  partidoSelected?: Partido

  getPartidos() {
    return partidos
  }
}
