import { Injectable } from '@angular/core';
import { Post } from '../posts/post/post';


declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(post: Post) {
    //console.log(post.title + " added Favorities");
    alertify.success(post.title + " added Favorities");
  }

  warning(post: Post) {
    alertify.warning(post.title);
  }

  error(post: Post) {
    alertify.error(post.title);
  }


}
