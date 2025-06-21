import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompartilharPage } from './compartilhar.page';

const routes: Routes = [
  {
    path: '',
    component: CompartilharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompartilharPageRoutingModule {}
