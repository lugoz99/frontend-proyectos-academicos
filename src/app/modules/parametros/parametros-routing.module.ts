import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearModalidadComponent } from './modalidad/crear-modalidad/crear-modalidad.component';
import { EditarModalidadComponent } from './modalidad/editar-modalidad/editar-modalidad.component';
import { EliminarModalidadComponent } from './modalidad/eliminar-modalidad/eliminar-modalidad.component';
import { ListarModalidadComponent } from './modalidad/listar-modalidad/listar-modalidad.component';

const routes: Routes = [
  {
    path: 'listar-modalidad',
    component: ListarModalidadComponent,
  },
  {
    path: 'crear-modalidad',
    component: CrearModalidadComponent,
  },
  {
    path: 'editar-modalidad/:id',
    component: EditarModalidadComponent,
  },
  {
    path: 'eliminar-modalidad/:id',
    component: EliminarModalidadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrosRoutingModule {}
