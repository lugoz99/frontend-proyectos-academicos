import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { HomeComponent } from './public/general/home/home.component';
// proceso de enrutamiento
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    //lazing loading
    path: 'seguridad',
    loadChildren: () =>
      import('./modules/seguridad/seguridad.module').then(
        (x) => x.SeguridadModule
      ),
  },
  {
    //lazing loading
    path: 'parametros',
    loadChildren: () =>
      import('./modules/parametros/parametros.module').then(
        (x) => x.ParametrosModule
      ),
  },
  {
    //lazing loading
    path: 'solicitudes',
    loadChildren: () =>
      import('./modules/solicitudes/solicitud.module').then(
        (x) => x.SolicitudModule
      ),
  },
  {
    //lazing loading
    path: 'proponentes',
    loadChildren: () =>
      import('./modules/proponentes/proponentes.module').then(
        (x) => x.ProponentesModule
      ),
  },
  {
    /// debe estar al final
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
