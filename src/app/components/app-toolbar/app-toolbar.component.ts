import { Component, Input } from '@angular/core';
import { Router, IsActiveMatchOptions } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent {
  hideHome = true
  hideAddBlog = false
  constructor(private router: Router) {
    switch (this.router.url) {
      case '/home':
        this.hideHome = true
        this.hideAddBlog = false
        break;
      case '/add-blog':
        this.hideHome = false
        this.hideAddBlog = true
        break;
      default:
          this.hideHome = false
          this.hideAddBlog = false
        break;
    }    
  }
}
