
const postApiUrl: string = 'https://jsonplaceholder.typicode.com/posts';

import { Injectable } from '@angular/core';
import { Post } from './post/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[]

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    this.httpClient.get<Post[]>(postApiUrl).subscribe(res => {
      this.posts = res;
    });
    return this.posts;
  }
}
