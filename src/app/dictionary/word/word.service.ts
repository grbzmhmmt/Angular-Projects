import { Injectable } from '@angular/core';
import { WordList } from './word-list.mock';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor() { }


  getWords(){
    return WordList;
  }


}
