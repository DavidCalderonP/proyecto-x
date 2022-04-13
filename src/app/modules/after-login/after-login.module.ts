import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AfterLoginComponent} from "./after-login.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {Route, RouterModule} from "@angular/router";
import {AccountsComponent} from "./accounts/accounts.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {ActivitiesComponent} from "./activities/activities.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTreeModule} from "@angular/material/tree";
import {CdkTreeModule} from "@angular/cdk/tree";
import {FooterComponent} from "./footer/footer.component";
import {MatCardModule} from "@angular/material/card";

export const routes: Route[] = [
  {
    path: '',
    component: AfterLoginComponent,
    children: [
      {path: 'accounts', component: AccountsComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'activities', component: ActivitiesComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AfterLoginComponent,
    AccountsComponent,
    ContactsComponent,
    ActivitiesComponent,
    FooterComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    CdkTreeModule,
    MatCardModule
  ]
})
export class AfterLoginModule {
}
