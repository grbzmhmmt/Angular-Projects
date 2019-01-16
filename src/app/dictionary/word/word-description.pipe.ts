import { Pipe, PipeTransform } from '@angular/core';
import { Word } from './word';

@Pipe({
  name: 'getWordDescription'
})
export class WordDescriptionPipe implements PipeTransform {

  transform(value: Word[], filterText: string): Word[] {

    filterText = filterText ? filterText.toLocaleLowerCase() : null;
    myWord: Word;

    return filterText ? value.filter((w: Word) => w.wordName.toLocaleLowerCase().startsWith(filterText.substring(0.1))
      && w.wordName.toLocaleLowerCase().indexOf("filterText")).slice(0, 1) : value.slice(0, 1);

    //      filterText ? value.filter((w: Word) => w.wordName.toLocaleLowerCase().startsWith(filterText.substring(0, 1))
    // && w.wordName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
