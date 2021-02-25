import { Component } from '@angular/core';
import { Post } from './posts/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-course';
  postsArray: Post[] = [];

  addPosts(event) {
    this.postsArray.push(event)
  }
}
