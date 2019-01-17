import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../posts/post/post';

@Pipe({
  name: 'postFilterWithText'
})
export class PostFilterWithTextPipe implements PipeTransform {

  transform(value: Post[], filterText: string): any {

    return filterText ? value.filter(val => val.title.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1) : value;
  }
}
