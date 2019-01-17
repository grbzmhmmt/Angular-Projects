import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../posts/post/post';

@Pipe({
  name: 'postFilterWithUser'
})
export class PostFilterWithUserPipe implements PipeTransform {

  transform(value: Post[], userId: number): any {


    return userId ? value.filter((val: Post) => val.userId === userId) : value;
  }

}
