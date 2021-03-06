import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitud/eliminar-solicitud/eliminar-solicitud.component';
import { ListarSolicitudComponent } from './solicitud/listar-solicitud/listar-solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParametrosRoutingModule } from '../parametros/parametros-routing.module';
import { CrearInvitacionComponent } from './invitacion/crear-invitacion/crear-invitacion.component';
import { EditarInvitacionComponent } from './invitacion/editar-invitacion/editar-invitacion.component';
import { ListarInvitacionComponent } from './invitacion/listar-invitacion/listar-invitacion.component';
import { EliminarInvitacionComponent } from './invitacion/eliminar-invitacion/eliminar-invitacion.component';
import { RespuestaInvitacionComponent } from './invitacion/respuesta-invitacion/respuesta-invitacion.component';
import { CrearRecordatorioComponent } from './recordatorio/crear-recordatorio/crear-recordatorio.component';
import { ListarRecordatorioComponent } from './recordatorio/listar-recordatorio/listar-recordatorio.component';
import { EliminarRecordatorioComponent } from './recordatorio/eliminar-recordatorio/eliminar-recordatorio.component';
import { ListarResultadoEvaluacionComponent } from './resultadoEvaluacion/listar-resultado-evaluacion/listar-resultado-evaluacion.component';
import { EditarResultadoEvaluacionComponent } from './resultadoEvaluacion/editar-resultado-evaluacion/editar-resultado-evaluacion.component';

@NgModule({
  declarations: [
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent,
    ListarSolicitudComponent,
    CrearInvitacionComponent,
    EditarInvitacionComponent,
    ListarInvitacionComponent,
    EliminarInvitacionComponent,
    RespuestaInvitacionComponent,
    CrearRecordatorioComponent,
    ListarRecordatorioComponent,
    EliminarRecordatorioComponent,
    ListarResultadoEvaluacionComponent,
    EditarResultadoEvaluacionComponent,
  ],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    ParametrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class SolicitudModule {}
