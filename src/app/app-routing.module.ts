import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comun/home/home.component';
import { PartidosComponent } from './partidos/partidos/partidos.component';
import { SucesosComponent } from './sucesos/sucesos.component';
import { EquiposComponent } from './equipos/equipos/equipos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'partidos', component: PartidosComponent,
    loadChildren: () => import('./partidos/partidos.module').then(m => m.PartidosModule)
  },
  { path: 'equipos', component: EquiposComponent },
  { path: 'sucesos', component: SucesosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
