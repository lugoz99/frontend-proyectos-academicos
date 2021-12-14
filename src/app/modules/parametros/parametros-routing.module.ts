import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  /****************************************************************** */
  // Rutas Tipo vinculacion
  {
    path: 'listar-tipoVinculacion',
    component: ListarTipoVinculacionComponent,
  },
  {
    path: 'crear-tipoVinculacion',
    component: CrearTipoVinculacionComponent,
  },
  {
    path: 'editar-tipoVinculacion/:id',
    component: EditarTipoVinculacionComponent,
  },
  {
    path: 'eliminar-tipoVinculacion/:id',
    component: EliminarTipoVinculacionComponent,
  },
  /****************************************************************** */
  // Rutas Tipos Comite
  {
    path: 'listar-tiposComite',
    component: ListarTiposComiteComponent,
  },
  {
    path: 'crear-tiposComite',
    component: CrearTiposComiteComponent,
  },
  {
    path: 'editar-tiposComite/:id',
    component: EditarTiposComiteComponent,
  },
  {
    path: 'eliminar-tiposComite/:id',
    component: EliminarTiposComiteComponent,
  },
  /****************************************************************** */
  // Rutas Area Investigacion
  {
    path: 'listar-areaInvestigacion',
    component: ListarAreaInvestigacionComponent,
  },
  {
    path: 'crear-areaInvestigacion',
    component: CrearAreaInvestigacionComponent,
  },
  {
    path: 'editar-areaInvestigacion/:id',
    component: EditarAreaInvestigacionComponent,
  },
  {
    path: 'eliminar-areaInvestigacion/:id',
    component: EliminarAreaInvestigacionComponent,
  },
  /****************************************************************** */
  // Rutas Facultad
  {
    path: 'listar-facultad',
    component: ListarFacultadComponent,
  },
  {
    path: 'crear-facultad',
    component: CrearFacultadComponent,
  },
  {
    path: 'editar-facultad/:id',
    component: EditarFacultadComponent,
  },
  {
    path: 'eliminar-facultad/:id',
    component: EliminarFacultadComponent,
  },
  /***************************************************************************/
  //Ruta Departamento
  {
    path: 'listar-departamento',
    component: ListarDepartamentoComponent,
  },
  {
    path: 'crear-departamento',
    component: CrearDepartamentoComponent,
  },
  {
    path: 'editar-departamento/:id',
    component: EditarDepartamentoComponent,
  },
  {
    path: 'eliminar-departamento/:id',
    component: EliminarDepartamentoComponent,
  },
  // **********************************************************************
  // ruta tipoSolicitud
  {
    path: 'listar-tipoSolicitud',
    component: ListarTipoSolicitudComponent,
  },
  {
    path: 'crear-tipoSolicitud',
    component: CrearTipoSolicitudComponent,
  },
  {
    path: 'eliminar-tipoSolicitud/:id',
    component: EliminarTipoSolicitudComponent,
  },
  {
    path: 'editar-tipoSolicitud/:id',
    component: EditarTipoSolicitudComponent,
  },
  // **********************************************************************
  // ruta correoNotificacion
  {
    path: 'listar-correoNotificacion',
    component: ListarCorreoNotificacionComponent,
  },
  {
    path: 'crear-correoNotificacion',
    component: CrearCorreoNotificacionComponent,
  },
  {
    path: 'editar-correoNotificacion/:id',
    component: EditarCorreoNotificacionComponent,
  },
  {
    path: 'eliminar-correoNotificacion/:id',
    component: EliminarCorreoNotificacionComponent,
  },
  // ruta Jurados
  {
    path: 'listar-jurado',
    component: ListarJuradoComponent,
  },
  {
    path: 'crear-jurado',
    component: CrearJuradoComponent,
  },
  {
    path: 'editar-jurado/:id',
    component: EditarJuradoComponent,
  },
  {
    path: 'eliminar-jurado/:id',
    component: EliminarJuradoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrosRoutingModule {}
