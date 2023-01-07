import { Component } from '@angular/core';
import { BlogsService } from './services/blogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private blogsService: BlogsService
  ) {
    this.blogsService.getBlogs()
  }
}
