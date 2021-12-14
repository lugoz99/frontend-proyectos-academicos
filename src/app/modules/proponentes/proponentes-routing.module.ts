import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProponenteComponent } from './proponente/crear-proponente/crear-proponente.component';
import { EditarProponenteComponent } from './proponente/editar-proponente/editar-proponente.component';
import { EliminarProponenteComponent } from './proponente/eliminar-proponente/eliminar-proponente.component';
import { ListarProponenteComponent } from './proponente/listar-proponente/listar-proponente.component';

const routes: Routes = [
  {
    path: 'crear-proponente',
    component: CrearProponenteComponent,
  },
  {
    path: 'eliminar-proponente/:id',
    component: EliminarProponenteComponent,
  },
  {
    path: 'listar-proponente',
    component: ListarProponenteComponent,
  },
  {
    path: 'editar-proponente/:id',
    component: EditarProponenteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProponentesRoutingModule {}
