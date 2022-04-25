import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor(private router: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
  }

  redirect(){
    console.log(this.router.url)
    console.log("parent: ", this.ar.parent)
    // @ts-ignore
    this.router.navigate(['create'], {relativeTo: this.ar.parent})
  }
}


