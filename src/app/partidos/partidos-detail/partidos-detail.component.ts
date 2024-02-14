import { Component } from '@angular/core';
import { Partido } from 'src/app/models/Partido';
import { PartidosService } from 'src/app/servicios/partidos.service';

@Component({
  selector: 'app-partidos-detail',
  templateUrl: './partidos-detail.component.html',
  styleUrls: ['./partidos-detail.component.css']
})
export class PartidosDetailComponent {
  partido?: Partido = this.partidosService.partidoSelected

  constructor(private partidosService: PartidosService) { }
}
