import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import Blog from '../../models/Blog';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchTerm: FormControl = new FormControl()
  mainBlog: Blog = this.blogsService.blogs[0] || {}
  constructor(
    public blogsService: BlogsService
  ) {
    this.searchTermValueChange()
    this.blogsService.getBlogs()
  }

  searchTermValueChange() {
    this.searchTerm.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe(value => {
      if (!value.trim()) {
        this.blogsService.filtredBlogs = this.blogsService.blogs
      }else {
        this.blogsService.filtredBlogs = this.blogsService.blogs.filter(
          b => b.title.toLowerCase().indexOf(value) > -1 || b.content.toLowerCase().indexOf(value) > -1
        )
      }
    })
  }

}
