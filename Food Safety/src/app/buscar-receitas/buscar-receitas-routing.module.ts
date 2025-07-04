import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPage } from './buscar-receitas.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarPageRoutingModule {}