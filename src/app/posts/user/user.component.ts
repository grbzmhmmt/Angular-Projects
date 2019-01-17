import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../post.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  @Output() userEmit: EventEmitter<any> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = this.postService.getUsers();
  }

  onSetUserPosts(user: User) {
    this.userEmit.emit(user ? user.id : null);
    console.log(user.id);
  }

}
