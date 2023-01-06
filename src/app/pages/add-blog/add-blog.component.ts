import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent {
  addBlogForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private blogsService: BlogsService
  ) {
    this.addBlogForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required]
    })
  }

  saveBlog() {
    if (this.addBlogForm.valid) {
      this.blogsService.addBlog(this.addBlogForm.value)
    }
  }
}
