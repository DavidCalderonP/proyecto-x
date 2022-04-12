import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error404Component} from "./modules/error/error404/error404.component";
import {AfterLoginComponent} from "./modules/after-login/after-login.component";
import {AuthGuard} from "./modules/auth/auth.guard";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m =>m.AuthModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: ()=> import('./modules/after-login/after-login.module').then(m=>m.AfterLoginModule)
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
