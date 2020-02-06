import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewHadesPageRoutingModule } from './view-hades-routing.module';

import { ViewHadesPage } from './view-hades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewHadesPageRoutingModule
  ],
  declarations: [ViewHadesPage]
})
export class ViewHadesPageModule {}
