import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, Router, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";

const Routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthModule { }
