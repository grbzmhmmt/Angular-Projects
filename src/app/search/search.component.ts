import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Word } from '../word/word';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  filterText:string;
  word:Word;
  filterChar:string;

  constructor() { }

  ngOnInit() { }

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
