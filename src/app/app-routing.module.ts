import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error404Component} from "./modules/error/error404/error404.component";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:
      () => import('./modules/auth/auth.module').then(m =>m.AuthModule)
  },
  {
    path: 'error',
    loadChildren:
      () => import('./modules/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
