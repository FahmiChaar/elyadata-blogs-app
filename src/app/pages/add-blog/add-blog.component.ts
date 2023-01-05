import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent {
  addBlogForm: FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.addBlogForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required]
    })
  }

  saveBlog() {
    if (this.addBlogForm.valid) {
      
    }
  }
}
