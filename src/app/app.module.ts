import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComunModule } from './comun/comun.module';
import { SucesosComponent } from './sucesos/sucesos.component';
import { RouterModule } from '@angular/router';
import { PartidosModule } from './partidos/partidos.module';

@NgModule({
  declarations: [
    AppComponent,
    SucesosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComunModule,
    RouterModule,
    PartidosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
