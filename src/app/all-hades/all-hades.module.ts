import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllHadesPageRoutingModule } from './all-hades-routing.module';

import { AllHadesPage } from './all-hades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllHadesPageRoutingModule
  ],
  declarations: [AllHadesPage]
})
export class AllHadesPageModule {}
