import { Pipe, PipeTransform } from '@angular/core';
import { Word } from './word';

@Pipe({
  name: 'wordFilter'
})
export class WordFilterPipe implements PipeTransform {

  transform(value: Word[], filterText: string): Word[] {

    filterText = filterText ? filterText.toLocaleLowerCase() : null;

    return filterText ? value.filter( (w: Word) => w.wordName.toLocaleLowerCase().startsWith(filterText.substring(0, 1))
                                               && w.wordName.toLocaleLowerCase().indexOf(filterText)!==-1 ).slice(0,15) : value.slice(0,15);
  }

}
