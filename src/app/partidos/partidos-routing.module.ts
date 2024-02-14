import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidosDetailComponent } from './partidos-detail/partidos-detail.component';

const routes: Routes = [
  { path: 'partido-detail/:id', component: PartidosDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
