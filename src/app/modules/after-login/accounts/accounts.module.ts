import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountsComponent} from "./accounts.component";
import {Route, RouterModule} from "@angular/router";
import { EditAccountComponent } from './edit-account/edit-account.component';
import {ReportAccountComponent} from "./report-account/report-account.component";

const Routes: Route[] = [
  {
    path: 'dashboard',
    component: AccountsComponent
  },
  {
    path: 'create',
    component: EditAccountComponent
  },
  {
    path: 'reports',
    component: ReportAccountComponent
  },
  {
    path: 'edit/:id',
    component: EditAccountComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AccountsComponent, EditAccountComponent, ReportAccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ]
})
export class AccountsModule { }
