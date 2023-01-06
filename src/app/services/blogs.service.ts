import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Blog from '../models/Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  apiUrl = 'http://localhost:8000'
  blogs: Blog[] = []
  filtredBlogs: Blog[] = []
  constructor(
    private httpClient: HttpClient
  ) {}

  getBlogs() {
    this.httpClient.get(`${this.apiUrl}/blogs`).subscribe({
      next: (resp: any) => {
        this.blogs = resp
        this.filtredBlogs = this.blogs
      },
      error: (e) => console.error(e)
    })
  }

  addBlog(blog: Blog) {
    this.blogs.unshift(blog)
    this.filtredBlogs.unshift(blog)
  }
}
