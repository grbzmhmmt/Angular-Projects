import { Component, OnInit, Input, DoCheck, ViewChild } from '@angular/core';
import { Word } from '../word/word';
import { PostComponent } from 'src/app/posts/post/post.component';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  filterText:string;
  word:Word;
  filterChar:string;
  title = 'Dictionary';
  constructor(private dictionaryService:DictionaryService) { }

  ngOnInit() {


  }

    /*this.dictionaryService.setCaptionEmitter.subscribe(value=>{
      this.filterText = value;
      this.filterChar=this.filterText.substring(0,1);  
    });
*/

  onLetterClicked(event: any){
    this.filterText = event;
    this.filterChar=this.filterText.substring(0,1);
  }

  onSetWord(event:any){
    this.word=event;
    console.log(event.wordName);
    this.filterText=this.word.wordName;
    this.filterChar=this.word.wordName.substring(0,1);
  }

}
