import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CrearAreaInvestigacionComponent } from './areaInvestigacion/crear-area-investigacion/crear-area-investigacion.component';
import { EditarAreaInvestigacionComponent } from './areaInvestigacion/editar-area-investigacion/editar-area-investigacion.component';
import { EliminarAreaInvestigacionComponent } from './areaInvestigacion/eliminar-area-investigacion/eliminar-area-investigacion.component';
import { ListarAreaInvestigacionComponent } from './areaInvestigacion/listar-area-investigacion/listar-area-investigacion.component';
import { CrearCorreoNotificacionComponent } from './correoNotificacion/crear-correo-notificacion/crear-correo-notificacion.component';
import { EditarCorreoNotificacionComponent } from './correoNotificacion/editar-correo-notificacion/editar-correo-notificacion.component';
import { EliminarCorreoNotificacionComponent } from './correoNotificacion/eliminar-correo-notificacion/eliminar-correo-notificacion.component';
import { ListarCorreoNotificacionComponent } from './correoNotificacion/listar-correo-notificacion/listar-correo-notificacion.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';
import { CrearFacultadComponent } from './facultad/crear-facultad/crear-facultad.component';
import { EditarFacultadComponent } from './facultad/editar-facultad/editar-facultad.component';
import { EliminarFacultadComponent } from './facultad/eliminar-facultad/eliminar-facultad.component';
import { ListarFacultadComponent } from './facultad/listar-facultad/listar-facultad.component';
import { CrearJuradoComponent } from './jurado/crear-jurado/crear-jurado.component';
import { EditarJuradoComponent } from './jurado/editar-jurado/editar-jurado.component';
import { EliminarJuradoComponent } from './jurado/eliminar-jurado/eliminar-jurado.component';
import { ListarJuradoComponent } from './jurado/listar-jurado/listar-jurado.component';
import { CrearModalidadComponent } from './modalidad/crear-modalidad/crear-modalidad.component';
import { EditarModalidadComponent } from './modalidad/editar-modalidad/editar-modalidad.component';
import { EliminarModalidadComponent } from './modalidad/eliminar-modalidad/eliminar-modalidad.component';
import { ListarModalidadComponent } from './modalidad/listar-modalidad/listar-modalidad.component';
import { CrearTiposComiteComponent } from './tiposComite/crear-tipos-comite/crear-tipos-comite.component';
import { EditarTiposComiteComponent } from './tiposComite/editar-tipos-comite/editar-tipos-comite.component';
import { EliminarTiposComiteComponent } from './tiposComite/eliminar-tipos-comite/eliminar-tipos-comite.component';
import { ListarTiposComiteComponent } from './tiposComite/listar-tipos-comite/listar-tipos-comite.component';
import { CrearTipoSolicitudComponent } from './tipoSolicitud/crear-tipo-solicitud/crear-tipo-solicitud.component';
import { EditarTipoSolicitudComponent } from './tipoSolicitud/editar-tipo-solicitud/editar-tipo-solicitud.component';
import { EliminarTipoSolicitudComponent } from './tipoSolicitud/eliminar-tipo-solicitud/eliminar-tipo-solicitud.component';
import { ListarTipoSolicitudComponent } from './tipoSolicitud/listar-tipo-solicitud/listar-tipo-solicitud.component';
import { CrearTipoVinculacionComponent } from './tipoVinculacion/crear-tipo-vinculacion/crear-tipo-vinculacion.component';
import { EditarTipoVinculacionComponent } from './tipoVinculacion/editar-tipo-vinculacion/editar-tipo-vinculacion.component';
import { EliminarTipoVinculacionComponent } from './tipoVinculacion/eliminar-tipo-vinculacion/eliminar-tipo-vinculacion.component';
import { ListarTipoVinculacionComponent } from './tipoVinculacion/listar-tipo-vinculacion/listar-tipo-vinculacion.component';

const routes: Routes = [
  //Rutas Modalidad
  {
    path: 'listar-modalidad',
    component: ListarModalidadComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'crear-modalidad',
    component: CrearModalidadComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'editar-modalidad/:id',
    component: EditarModalidadComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'eliminar-modalidad/:id',
    component: EliminarModalidadComponent,
    canActivate: [AuthenticatedGuard],
  },
  /****************************************************************** */
  // Rutas Tipo vinculacion
  {
    path: 'listar-tipoVinculacion',
    component: ListarTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'crear-tipoVinculacion',
    component: CrearTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'editar-tipoVinculacion/:id',
    component: EditarTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'eliminar-tipoVinculacion/:id',
    component: EliminarTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  /****************************************************************** */
  // Rutas Tipos Comite
  {
    path: 'listar-tiposComite',
    component: ListarTiposComiteComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'crear-tiposComite',
    component: CrearTiposComiteComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'editar-tiposComite/:id',
    component: EditarTiposComiteComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'eliminar-tiposComite/:id',
    component: EliminarTiposComiteComponent,
    canActivate: [AuthenticatedGuard],
  },
  /****************************************************************** */
  // Rutas Area Investigacion
  {
    path: 'listar-areaInvestigacion',
    component: ListarAreaInvestigacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'crear-areaInvestigacion',
    component: CrearAreaInvestigacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'editar-areaInvestigacion/:id',
    component: EditarAreaInvestigacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'eliminar-areaInvestigacion/:id',
    component: EliminarAreaInvestigacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  /****************************************************************** */
  // Rutas Facultad
  {
    path: 'listar-facultad',
    component: ListarFacultadComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'crear-facultad',
    component: CrearFacultadComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'editar-facultad/:id',
    component: EditarFacultadComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'eliminar-facultad/:id',
    component: EliminarFacultadComponent,
    canActivate: [AuthenticatedGuard],
  },
  /***************************************************************************/
  //Ruta Departamento
  {
    path: 'listar-departamento',
    component: ListarDepartamentoComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'crear-departamento',
    component: CrearDepartamentoComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'editar-departamento/:id',
    component: EditarDepartamentoComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'eliminar-departamento/:id',
    component: EliminarDepartamentoComponent,
    canActivate: [AuthenticatedGuard],
  },
  // **********************************************************************
  // ruta tipoSolicitud
  {
    path: 'listar-tipoSolicitud',
    component: ListarTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'crear-tipoSolicitud',
    component: CrearTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'eliminar-tipoSolicitud/:id',
    component: EliminarTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'editar-tipoSolicitud/:id',
    component: EditarTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard],
  },
  // **********************************************************************
  // ruta correoNotificacion
  {
    path: 'listar-correoNotificacion',
    component: ListarCorreoNotificacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'crear-correoNotificacion',
    component: CrearCorreoNotificacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'editar-correoNotificacion/:id',
    component: EditarCorreoNotificacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'eliminar-correoNotificacion/:id',
    component: EliminarCorreoNotificacionComponent,
    canActivate: [AuthenticatedGuard],
  },
  // ruta Jurados
  {
    path: 'listar-jurado',
    component: ListarJuradoComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'crear-jurado',
    component: CrearJuradoComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'editar-jurado/:id',
    component: EditarJuradoComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'eliminar-jurado/:id',
    component: EliminarJuradoComponent,
    canActivate: [AuthenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrosRoutingModule {}
