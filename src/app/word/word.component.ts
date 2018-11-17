import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WordService } from './word.service';
import { Word } from './word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {


  words: Word[];
  @Input() filterText: string;
  @Output() onSetWord: EventEmitter<any> = new EventEmitter();
  
  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.getWords();
  }

  getWords() {
    this.words = this.wordService.getWords();
  }

  setWord(value: any) {
   // console.log(value.wordName);
    this.onSetWord.emit(value);
  }
}
