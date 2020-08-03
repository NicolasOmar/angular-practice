import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<any>, filterString: string, propName: string) {
    return filterString.length
      ? value.filter(item => item[propName] === filterString)
      : value;
  }
}