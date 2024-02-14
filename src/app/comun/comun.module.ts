import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    CabeceraComponent,
    PieComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    CabeceraComponent
  ]
})
export class ComunModule { }
