import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
private posts: Post[] = [];
private postsUpdated = new Subject<Post[]>();

constructor() { }

getPosts() {
  return [...this.posts];
}

getPostUpdateListener() {
  return this.postsUpdated.asObservable();
}

addPosts(title: string, content: string) {
  const post: Post = {title, content}
  this.posts.push(post)
  this.postsUpdated.next([...this.posts])
}
}
