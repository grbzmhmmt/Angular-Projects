import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../word/word';
import { WordList } from '../word/word-list.mock';

@Component({
  selector: 'app-word-description',
  templateUrl: './word-description.component.html',
  styleUrls: ['./word-description.component.css']
})
export class WordDescriptionComponent implements OnInit {

  words: Word[];
  @Input() filterText: string;


  constructor() { }
  ngOnInit() {

    this.getWords();
  }

  getWords() {
    this.words = WordList;

  }



}
