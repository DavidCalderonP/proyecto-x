import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MenuConfig, Menu} from "../../configuration/core/MenuConfig";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";
import {ConfigurationService} from "../../configuration/core/configuration.service";

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
  breadcrumbs: Menu[] = [];

  constructor(private router: Router,private route: ActivatedRoute, private configuration: ConfigurationService) {
    //console.log(MenuConfig.filter(x=>x.show))
    //this.dataSource.data = MenuConfig;
  }

  // hasChild = (_: number, node: any) => !!node.children && node.children.length > 0 && node.show_children;

  ngOnInit(): void {
    this.loadBreadcrumbs(this.router.url.slice(1-(this.router.url.length)))
  }

  ngAfterViewInit() {
    let footer = document.getElementsByTagName('footer')[0] as HTMLElement;
    let pageContainer = document.getElementById('page-container') as HTMLElement;
    let toolbar = document.getElementsByTagName('mat-toolbar')[0] as HTMLElement;
    pageContainer.style.minHeight = `calc(100vh - ${footer.clientHeight}px - ${toolbar.clientHeight}px`;
  }

  redirect(node: Menu){
    this.router.navigate([node.link_segment]).then(()=>{
      this.sidenav.close().then(()=>{
        this.loadBreadcrumbs(node.link_segment);
      });
    });
  }

  loadBreadcrumbs(search: string){
    this.breadcrumbs = this.configuration.getBreadcrumbs(this.list ,search);
    console.log(this.breadcrumbs)
  }

  open(sidenav: any){
    this.sidenav.open();
  }

  toUp(){
    document.getElementById('page-container')?.scrollIntoView({behavior: "smooth"})
  }

  expandOrCollapse(node: Menu){
    const sidenavHeight = document.getElementById('sidenav')?.clientWidth || 0;
    let icon = document.getElementById('icon'+node.id) as HTMLElement;
    let degrees = this.strToBool(document.getElementById('button'+node.id)?.getAttribute('aria-expanded') || '');
    icon.style.transform = `translateX(${ sidenavHeight-icon.getBoundingClientRect().right}px) rotate(${degrees ? 180 : 0}deg)`;
    icon.style.webkitTransition = '-webkit-transform 0.3s ease-in'
  }

  strToBool(bool: string = ''){
    return bool=='true';
  }

}
