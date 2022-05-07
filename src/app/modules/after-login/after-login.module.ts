import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AfterLoginComponent} from "./after-login.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {Route, RouterModule} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTreeModule} from "@angular/material/tree";
import {CdkTreeModule} from "@angular/cdk/tree";
import {FooterComponent} from "./footer/footer.component";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatMenuModule} from "@angular/material/menu";
import { ProfileComponent } from './profile/profile.component';
import {NgxPermissionsModule, NgxPermissionsRestrictStubModule} from "ngx-permissions";

export const routes: Route[] = [
  {
    path: '',
    component: AfterLoginComponent,
    children: [
      {
        path: 'accounts',
        loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: 'activities',
        loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule)
      },
      {
        path: '**',
        redirectTo: 'accounts',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [
    AfterLoginComponent,
    ContactsComponent,
    FooterComponent,
    ProfileComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forChild(routes),
    NgxPermissionsModule.forChild(),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    CdkTreeModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    NgxPermissionsRestrictStubModule
  ]
})
export class AfterLoginModule {
}
