import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticasPage } from './politicas.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticasPageRoutingModule {}
