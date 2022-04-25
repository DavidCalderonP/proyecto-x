import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivitiesComponent} from "./activities.component";
import {Route, RouterModule} from "@angular/router";
import { EditActivitiesComponent } from './edit-activities/edit-activities.component';

const Routes: Route[] = [
  {
    path: '',
    component: ActivitiesComponent
  },
  {
    path: 'create',
    component: EditActivitiesComponent
  }
];

@NgModule({
  declarations: [ActivitiesComponent, EditActivitiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ]
})
export class ActivitiesModule { }
