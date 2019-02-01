import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from './post';
import { from } from 'rxjs';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];
  @Input() userId;
  postFilterText: string;
  random: number;
  constructor(private postService: PostService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.posts = this.postService.getPosts();
  }

  userEmit(event: any) {
    this.userId = event;
    // console.log(this.userId);
  }

  AddToFavorite(post: Post) {
    this.random = Math.floor(Math.random() * (3)) + 1;
    if (this.random == 1) {

      this.alertifyService.error(post);
    } else if (this.random == 2) {

      this.alertifyService.warning(post);
    } else if (this.random == 3) {

      this.alertifyService.success(post);
    }
    /*else{
      this.alertifyService.info(post);
    }
*/
  }
}
