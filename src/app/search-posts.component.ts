import { Component, OnInit } from '@angular/core';
import { Post, posts} from './posts';

@Component({
  selector: 'search-posts',
  templateUrl: './search-posts.component.html'
 })
export class SearchPosts implements OnInit {
  posts: Array<Post> = posts;
  ngOnInit() {
  }

  selectPost(post) {
    console.log(`The selected post is::  ${post.title}`);
  }
}
