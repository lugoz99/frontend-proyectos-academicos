import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProponentesRoutingModule } from './proponentes-routing.module';
import { EditarProponenteComponent } from './proponente/editar-proponente/editar-proponente.component';
import { EliminarProponenteComponent } from './proponente/eliminar-proponente/eliminar-proponente.component';
import { ListarProponenteComponent } from './proponente/listar-proponente/listar-proponente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CrearProponenteComponent } from './proponente/crear-proponente/crear-proponente.component';

@NgModule({
  declarations: [
    CrearProponenteComponent,
    EditarProponenteComponent,
    EliminarProponenteComponent,
    ListarProponenteComponent,
  ],
  imports: [
    CommonModule,
    ProponentesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class ProponentesModule {}
