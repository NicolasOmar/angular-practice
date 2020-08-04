import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    return value.sort((a, b) => a.name > b.name ? 1 : -1);
  }

}
