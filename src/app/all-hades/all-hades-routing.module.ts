import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllHadesPage } from './all-hades.page';

const routes: Routes = [
  {
    path: '',
    component: AllHadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllHadesPageRoutingModule {}
