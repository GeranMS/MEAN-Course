import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postsSub = this.postService.getPostUpdateListener().subscribe(posts => {
      this.posts = posts
    })
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

}
