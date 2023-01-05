import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBlogRoutingModule } from './add-blog-routing.module';
import { AddBlogComponent } from './add-blog.component';


@NgModule({
  declarations: [
    AddBlogComponent
  ],
  imports: [
    CommonModule,
    AddBlogRoutingModule
  ]
})
export class AddBlogModule { }
