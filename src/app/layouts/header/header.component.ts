import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  id: any;
  drop(param: any) {
    if(this.id == param) {
      this.id = '';
    }else {
      this.id = param;
    }
  }

  navbar: boolean = false;
  down(param: boolean) {
    if(this.navbar == param) {
      this.navbar = false;
    }else {
      this.navbar = param;
      console.log(this.navbar);
    }
    
  }
}
