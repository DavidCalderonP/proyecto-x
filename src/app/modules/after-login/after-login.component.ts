import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {MenuConfig, Menu} from "../../configuration/core/MenuConfig";




@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.scss']
})
export class AfterLoginComponent implements OnInit, AfterViewInit {

  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();

  constructor() {
    this.dataSource.data = MenuConfig;
  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let footer = document.getElementsByTagName('footer')[0] as HTMLElement;
    let pageContainer = document.getElementById('page-container') as HTMLElement;
    let toolbar = document.getElementsByTagName('mat-toolbar')[0] as HTMLElement;
    pageContainer.style.minHeight = `calc(100vh - ${footer.clientHeight}px - ${toolbar.clientHeight}px - 40px`;
  }

  check(node: any){
    console.log(node)
  }

  print(data: any){
    console.log(data)
  }

}
