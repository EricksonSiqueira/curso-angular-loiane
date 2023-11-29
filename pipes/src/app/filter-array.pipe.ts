import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
})
export class FilterArrayPipe implements PipeTransform {
  transform(value: string[], ...args: any[]): any {
    if (value.length === 0 || args === undefined) {
      return value;
    }

    const filter = args[0].toLocaleLowerCase();

    return value.filter((v) => v.toLowerCase().indexOf(filter) !== -1);
  }
}
