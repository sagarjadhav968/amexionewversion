import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
 sideNavMenu: any; 	
constructor(private _router : Router) {    
 this.sideNavMenu = [{"text":"New Node","expand":false,"id":null,"leaf":false,"icon":"fa fa-folder-open-o","routerLink":null,"children":[{"text":"Model","expand":false,"id":"8e482de8-415f-48bb-b13b-7f2f7acfdc22","leaf":true,"icon":"fa fa-file-text-o","routerLink":"testall/core/model","children":null}]}]; }
sideNavClick(data: any) {
   if( data.children==null && data.routerLink) {
     this._router.navigate([data.routerLink]);
    }
  }
}
