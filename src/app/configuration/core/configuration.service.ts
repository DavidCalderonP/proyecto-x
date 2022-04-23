import {Injectable} from '@angular/core';
import {Menu} from "./MenuConfig";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() {
  }

  getBreadcrumbs(node: any, search: any): any {
    if (node.link_segment === search) return [node];
    else if ((node.children) || Array.isArray(node)) {
      let children: any = Array.isArray(node) ? node : node.children;
      for (let child of children) {
        let result = this.getBreadcrumbs(child, search);
        if (result) {
          if (node.link_segment) result.unshift(node);
          return result;
        }
      }
    }
  }
}
