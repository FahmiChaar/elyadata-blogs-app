import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Blog from '../../models/Blog';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
  blog: Blog = { title: '', author: '', content: '' }
  blogId: string | null
  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) {
    this.blogId = this.route.snapshot.paramMap.get('id')
    if (this.blogId) {
      this.getBlogById()
    }
  }

  async getBlogById() {
    this.blog = await this.blogsService.getBlogById(this.blogId)
  }

  async vote(type: 'upvote' | 'downvote') {
    await this.blogsService.vote(type, this.blogId)
    this.blog[type]! += 1
  }
}
