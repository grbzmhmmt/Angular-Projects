
const postApiUrl: string = 'https://jsonplaceholder.typicode.com/';

import { Injectable } from '@angular/core';
import { Post } from './post/post';
import { HttpClient } from '@angular/common/http';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[]
  users: User[];

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    this.httpClient.get<Post[]>(postApiUrl + 'posts').subscribe(res => {
      this.posts = res;
    });
    return this.posts;
  }


  getUsers() {
    this.httpClient.get<User[]>(postApiUrl + 'users').subscribe(res => {
      this.users = res;
    });
    return this.users;
  }

}
