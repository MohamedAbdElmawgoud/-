import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHadesPage } from './view-hades.page';

const routes: Routes = [
  {
    path: '',
    component: ViewHadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewHadesPageRoutingModule {}
