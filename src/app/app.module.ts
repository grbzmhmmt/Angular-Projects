import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { SearchComponent } from './search/search.component';
import { WordFilterPipe } from './word/word-filter.pipe';
import { WordService } from './word/word.service';
import { RightBarComponent } from './right-bar/right-bar.component';
import { WordDescriptionComponent } from './word-description/word-description.component';
import { UsersComponent } from './users/users/users.component';
import { WordDescriptionPipe } from './word/word-description.pipe';
import { PostComponent } from './post/post.component';
import { QuintessentialComponent } from './quintessential/quintessential.component';
import { Routes, RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';


const routes: Routes = [
  { path: 'dictionary', component: SearchComponent },
  { path: '', redirectTo: 'dictionary', pathMatch: 'full' },
  { path: 'posts', component: PostComponent },
  { path: 'quintessential', component: QuintessentialComponent },
  { path: 'spinner', component: SpinnerComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    SearchComponent,
    WordFilterPipe,
    RightBarComponent,
    WordDescriptionComponent,
    UsersComponent,
    WordDescriptionPipe,
    PostComponent,
    QuintessentialComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
