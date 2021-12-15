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
import { CrearRecordatorioComponent } from './recordatorio/crear-recordatorio/crear-recordatorio.component';
import { ListarRecordatorioComponent } from './recordatorio/listar-recordatorio/listar-recordatorio.component';
import { EliminarRecordatorioComponent } from './recordatorio/eliminar-recordatorio/eliminar-recordatorio.component';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { UnauthenticatedGuard } from 'src/app/guards/unauthenticated.guard';
const routes: Routes = [
  {
    path: 'listar-solicitud',
    component: ListarSolicitudComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'crear-solicitud',
    component: CrearSolicitudComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'editar-solicitud/:id',
    component: EditarSolicitudComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'eliminar-solicitud/:id',
    component: EliminarSolicitudComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'crear-invitacion',
    component: CrearInvitacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'editar-invitacion/:id',
    component: EditarInvitacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'listar-invitacion',
    component: ListarInvitacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'eliminar-invitacion/:id',
    component: EliminarInvitacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'eliminar-invitacion/:id',
    component: EliminarInvitacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'respuesta-invitacion/:id',
    component: RespuestaInvitacionComponent,
    canActivate: [UnauthenticatedGuard],
  },
  {
    path: 'crear-recordatorio',
    component: CrearRecordatorioComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'listar-recordatorio',
    component: ListarRecordatorioComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'eliminar-recordatorio/:id',
    component: EliminarRecordatorioComponent,
    canActivate: [AuthenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudRoutingModule {}
