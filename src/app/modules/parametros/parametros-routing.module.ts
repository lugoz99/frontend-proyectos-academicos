import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarModalidadComponent } from './modalidad/listar-modalidad/listar-modalidad.component';

const routes: Routes = [
  {
    path: 'listar-modalidad',
    component: ListarModalidadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrosRoutingModule {}
