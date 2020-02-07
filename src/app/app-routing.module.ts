import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'view-hades' ,  data: {hades : ''},
    loadChildren: () => import('./view-hades/view-hades.module').then( m => m.ViewHadesPageModule)
  },
  {
    path: 'all-hades',
    loadChildren: () => import('./all-hades/all-hades.module').then( m => m.AllHadesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
