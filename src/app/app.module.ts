import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ErrorComponent } from './modules/error/error/error.component';
import { Error404Component } from './modules/error/error404/error404.component';
import { Error500Component } from './modules/error/error500/error500.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { AccountsComponent } from './modules/pages/accounts/accounts.component';
import { ContactsComponent } from './modules/pages/contacts/contacts.component';
import { ActivitiesComponent } from './modules/pages/activities/activities.component';
import { FooterComponent } from './modules/pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    Error404Component,
    Error500Component,
    AccountsComponent,
    ContactsComponent,
    ActivitiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
