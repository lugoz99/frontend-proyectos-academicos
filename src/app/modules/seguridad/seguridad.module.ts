import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { InicioSesionComponent } from './general/inicio-sesion/inicio-sesion.component';
import { CerrarSesionComponent } from './general/cerrar-sesion/cerrar-sesion.component';
import { CambiarClaveComponent } from './general/cambiar-clave/cambiar-clave.component';
import { RecuperarClaveComponent } from './general/recuperar-clave/recuperar-clave.component';


@NgModule({
  declarations: [
    InicioSesionComponent,
    CerrarSesionComponent,
    CambiarClaveComponent,
    RecuperarClaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
