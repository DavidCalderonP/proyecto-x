import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatTreeNestedDataSource} from "@angular/material/tree";


const TREE_DATA = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {
            name: 'Broccoli',
            children: [
              {
                name: 'Food',
              },
              {
                name: 'Dessert'
              }
            ]
          },
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
  {
    name: 'Junk Food'
  }
];

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.scss']
})
export class AfterLoginComponent implements OnInit, AfterViewInit {

  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();

  constructor() {
    this.dataSource.data = TREE_DATA;
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

}
