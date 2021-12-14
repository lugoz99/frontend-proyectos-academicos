import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitud/eliminar-solicitud/eliminar-solicitud.component';
import { ListarSolicitudComponent } from './solicitud/listar-solicitud/listar-solicitud.component';
import { CrearInvitacionComponent } from './invitacion/crear-invitacion/crear-invitacion.component';
import { EliminarInvitacionComponent } from './invitacion/eliminar-invitacion/eliminar-invitacion.component';
import { ListarInvitacionComponent } from './invitacion/listar-invitacion/listar-invitacion.component';
import { EditarInvitacionComponent } from './invitacion/editar-invitacion/editar-invitacion.component';
import { RespuestaInvitacionComponent } from './invitacion/respuesta-invitacion/respuesta-invitacion.component';
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
  {
    path: 'crear-invitacion',
    component: CrearInvitacionComponent,
  },
  {
    path: 'editar-invitacion/:id',
    component: EditarInvitacionComponent,
  },
  {
    path: 'listar-invitacion',
    component: ListarInvitacionComponent,
  },
  {
    path: 'eliminar-invitacion/:id',
    component: EliminarInvitacionComponent,
  },
  {
    path: 'eliminar-invitacion/:id',
    component: EliminarInvitacionComponent,
  },
  {
    path: 'respuesta-invitacion/:id',
    component: RespuestaInvitacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudRoutingModule {}
