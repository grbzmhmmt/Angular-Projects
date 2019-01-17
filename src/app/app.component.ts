import { Component, OnInit, ViewChild } from '@angular/core';
import { PostComponent } from './posts/post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
@ViewChild(PostComponent) postComponentChild:PostComponent;

  ngOnInıt(){
    this.postComponentChild.getPosts();
  }
}
