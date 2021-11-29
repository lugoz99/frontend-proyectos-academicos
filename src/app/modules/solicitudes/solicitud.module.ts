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

@NgModule({
  declarations: [
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent,
    ListarSolicitudComponent,
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
