import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AfterLoginComponent} from "./after-login.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {Route, RouterModule} from "@angular/router";
import {AccountsComponent} from "../pages/accounts/accounts.component";
import {ContactsComponent} from "../pages/contacts/contacts.component";
import {ActivitiesComponent} from "../pages/activities/activities.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

export const routes: Route[] = [
  {
    path: '',
    component: AfterLoginComponent,
    children: [
      {path: 'accounts', component: AccountsComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'activities', component: ActivitiesComponent}]
  }
];

@NgModule({
  declarations: [AfterLoginComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AfterLoginModule {
}
