import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidosRoutingModule } from './partidos-routing.module';
import { PartidosComponent } from './partidos/partidos.component';
import { RouterModule } from '@angular/router';
import { PartidosMenuComponent } from './partidos-menu/partidos-menu.component';
import { PartidosDetailComponent } from './partidos-detail/partidos-detail.component';

@NgModule({
  declarations: [
    PartidosComponent,
    PartidosMenuComponent,
    PartidosDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PartidosRoutingModule
  ],
  exports: [
    PartidosComponent
  ]
})
export class PartidosModule { }
