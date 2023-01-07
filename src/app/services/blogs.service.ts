import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Blog from '../models/Blog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  apiUrl = 'http://localhost:8000'
  blogs: Blog[] = []
  filtredBlogs: Blog[] = []
  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  getBlogs() {
    this.httpClient.get(`${this.apiUrl}/blogs`).subscribe({
      next: (resp: any) => {
        this.blogs = resp.reverse()
        this.filtredBlogs = [...this.blogs]
      },
      error: (e) => console.error(e)
    })
  }

  addBlog(blog: Blog): Promise<Blog> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${this.apiUrl}/blogs`, blog).subscribe({
        next: (resp: any) => {
          this.blogs = [resp, ...this.blogs]
          this.filtredBlogs = [...this.blogs]
          this.snackBar.open(`${resp.title} successfully created`)
          resolve(resp)
        },
        error: (e) => {
          console.error(e)
          this.snackBar.open('Error when adding blog')
          reject(e)
        }
      })
    })
  }

  getBlogById(id: any): Promise<Blog> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.apiUrl}/blogs/${id}`).subscribe({
        next: (resp: any) => {
          resolve(resp)
        },
        error: (e) => {
          console.error(e)
          this.snackBar.open('Blog not found')
          reject(e)
        }
      })
    })
  }

  vote(voteType: 'upvote' | 'downvote', blogId: any): Promise<Blog> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(`${this.apiUrl}/blogs/${blogId}/vote`, { voteType }).subscribe({
        next: (resp: any) => {
          this.updateBlogVote(voteType, blogId)
          resolve(resp)
        },
        error: (e) => {
          console.error(e)
          this.snackBar.open('Error, Please try again')
          reject(e)
        }
      })
    })
  }

  private updateBlogVote(voteType: 'upvote' | 'downvote', blogId: string) {
    const index = this.blogs.findIndex(b => b._id?.$oid === blogId)
    if (index > -1) {
      this.blogs[index][voteType]! += 1
    }
  }

  clearSearch() {
    this.filtredBlogs = [...this.blogs]
  }
}
