import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompartilharPageRoutingModule } from './compartilhar-routing.module';

import { CompartilharPage } from './compartilhar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompartilharPageRoutingModule
  ],
  declarations: [CompartilharPage]
})
export class CompartilharPageModule {}
