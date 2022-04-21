import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MenuConfig, Menu} from "../../configuration/core/MenuConfig";
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.scss']
})
export class AfterLoginComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  // treeControl = new NestedTreeControl<any>(node => node.children);
  // dataSource = new MatTreeNestedDataSource<any>();
  list = MenuConfig

  constructor(private router: Router) {
    //console.log(MenuConfig.filter(x=>x.show))
    //this.dataSource.data = MenuConfig;
  }

  // hasChild = (_: number, node: any) => !!node.children && node.children.length > 0 && node.show_children;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let footer = document.getElementsByTagName('footer')[0] as HTMLElement;
    let pageContainer = document.getElementById('page-container') as HTMLElement;
    let toolbar = document.getElementsByTagName('mat-toolbar')[0] as HTMLElement;
    pageContainer.style.minHeight = `calc(100vh - ${footer.clientHeight}px - ${toolbar.clientHeight}px`;
  }

  redirect(node: Menu){
    this.router.navigate([node.link_segment]).then(()=>{
      this.sidenav.close();
    });
  }

  open(sidenav: any){
    this.sidenav.open();
  }

  toUp(){
    document.getElementById('page-container')?.scrollIntoView({behavior: "smooth"})
  }

  expandOrCollapse(node: Menu){
    let icon = document.getElementById('icon'+node.id) as HTMLElement;
    let degrees = this.strToBool(document.getElementById('button'+node.id)?.getAttribute('aria-expanded') || '') ? 180 : 0;
    icon.style.transform = `rotate(${degrees}deg)`;
    icon.style.webkitTransition = '-webkit-transform 0.3s ease-in'
  }

  strToBool(bool: string = ''){
    return bool=='true';
  }

}
