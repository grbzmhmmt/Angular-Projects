import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { SearchComponent } from './search/search.component';
import { WordFilterPipe } from './word/word-filter.pipe';
import { WordService } from './word/word.service';
import { RightBarComponent } from './right-bar/right-bar.component';
import { WordDescriptionComponent } from './word-description/word-description.component';
import { UsersComponent } from './users/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    SearchComponent,
    WordFilterPipe,
    RightBarComponent,
    WordDescriptionComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
