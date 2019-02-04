import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from './post';
import { from } from 'rxjs';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Pager } from 'src/app/app-pager';

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
  pager: Pager = new Pager();
  constructor(private postService: PostService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.posts = this.postService.getPosts();
    if (this.posts != null && this.posts.length > 0) {
      console.log(this.posts.length);
      this.pager = this.GetPager(this.posts.length);
    }
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

  GetPager(totalItems: number, currentPage: number = 1, pageSize: number=3): Pager {
    let totlaPages = Math.ceil(totalItems / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= totlaPages; i++) {
      pages.push(i);
    }

    var pager = new Pager();
    pager.currentpage = currentPage;
    pager.pageList = pages;
    pager.pageSize = pageSize;

    return pager;
  }

  setPage(page: number) {
    this.pager.currentpage = page;
  }
}
