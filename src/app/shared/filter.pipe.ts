import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';


@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Product[], filterString: string): Product[] {
    let result: any = [];
    if (!value || filterString === '') {
      return value;
    }
    value.forEach((a: any) => {
      const str = `${a.title.trim()}  ${a.description.trim()}`;

      if (
        str
          .replace('\\s', '')
          .toLowerCase()
          .includes(filterString.trim().toLowerCase())
      ) {
        result.push(a);
        //console.log(a);
      }
    });
    return result;
  }
}
