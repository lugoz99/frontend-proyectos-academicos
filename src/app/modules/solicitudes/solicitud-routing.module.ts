import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitud/eliminar-solicitud/eliminar-solicitud.component';
import { ListarSolicitudComponent } from './solicitud/listar-solicitud/listar-solicitud.component';

const routes: Routes = [
  {
    path: 'listar-solicitud',
    component: ListarSolicitudComponent,
  },
  {
    path: 'crear-solicitud',
    component: CrearSolicitudComponent,
  },
  {
    path: 'editar-solicitud/:id',
    component: EditarSolicitudComponent,
  },
  {
    path: 'eliminar-solicitud/:id',
    component: EliminarSolicitudComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudRoutingModule {}
