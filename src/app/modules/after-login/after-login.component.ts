import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.scss']
})
export class AfterLoginComponent implements OnInit, AfterViewInit {

   routes =  [
    { path: 'accounts', label: 'Accounts' },
    { path: 'contacts', label: 'Contacts' },
    { path: 'activities',label: 'Activities' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let footer = document.getElementsByTagName('footer')[0] as HTMLElement;
    let pageContainer = document.getElementById('page-container') as HTMLElement;
    let toolbar = document.getElementsByTagName('mat-toolbar')[0] as HTMLElement;
    pageContainer.style.minHeight = `calc(100vh - ${footer.clientHeight}px - ${toolbar.clientHeight}px - 40px`;
  }

}
