import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/models/Partido';
import { PartidosService } from 'src/app/servicios/partidos.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {
  partidos: Partido[] = []

  constructor(private partidosService: PartidosService) { }

  ngOnInit(): void {
    this.partidos = this.partidosService.getPartidos()
  }

  selectPartido(partido: Partido) {
    this.partidosService.partidoSelected = partido
  }
}
