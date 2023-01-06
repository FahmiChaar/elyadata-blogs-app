import { Component, Input } from '@angular/core';
import Blog from '../../models/Blog';

@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() blog: Blog = { title: '', content: '', author: '' }
}
