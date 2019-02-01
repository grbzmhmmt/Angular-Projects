import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './dictionary/word/word.component';
import { SearchComponent } from './dictionary/search/search.component';
import { WordFilterPipe } from './dictionary/word/word-filter.pipe';
import { WordService } from './dictionary/word/word.service';
import { RightBarComponent } from './dictionary/right-bar/right-bar.component';
import { WordDescriptionComponent } from './dictionary/word-description/word-description.component';
import { WordDescriptionPipe } from './dictionary/word/word-description.pipe';
import { PostComponent } from './posts/post/post.component';
import { QuintessentialComponent } from './quintessentials/quintessential/quintessential.component';
import { Routes, RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { Ng4LoadingSpinnerService, Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './posts/user/user.component';
import { PostFilterWithUserPipe } from './pipes/post-filter-with-user.pipe';
import { PostFilterWithTextPipe } from './pipes/post-filter-with-text.pipe';
import { from } from 'rxjs';
import { AlertifyService } from './services/alertify.service';
import { PokemonComponent } from './pokemons/pokemon/pokemon.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

const routes: Routes = [
  { path: 'dictionary', component: SearchComponent },
  { path: '', redirectTo: 'post', pathMatch: 'full' },
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
    WordDescriptionPipe,
    PostComponent,
    QuintessentialComponent,
    SpinnerComponent,
    UserComponent,
    PostFilterWithUserPipe,
    PostFilterWithTextPipe,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(routes),
    SweetAlert2Module.forRoot()
  ],
  providers: [WordService,Ng4LoadingSpinnerService,AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
