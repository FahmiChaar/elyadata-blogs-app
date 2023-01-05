import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent {
  @Input() hideAddBlog = false
}
