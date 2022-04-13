import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorComponent} from "./error/error.component";
import {Error404Component} from "./error404/error404.component";
import {Error500Component} from "./error500/error500.component";
import {Route, RouterModule} from "@angular/router";

export const routes: Route[] = [
  {
    path: 'mistake',
    component: ErrorComponent,
    children: [
      {
        path: '',
        redirectTo: 'error-404',
        pathMatch: 'full'
      },
      {
        path: 'error-404',
        component: Error404Component
      },
      {
        path: 'error-500',
        component: Error500Component
      },
      {
        path: '**',
        redirectTo: 'error-404',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [
    ErrorComponent,
    Error404Component,
    Error500Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ErrorModule {
}
