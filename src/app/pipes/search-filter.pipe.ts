import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
@Injectable({
  providedIn: 'root'
})

export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], fields: any, value: string): any[] {
    if (!items) {
      return []
    }

    if (!fields || !value) {
      return items;
    }

    return items.filter(item => {
      if (typeof(fields) === 'string' && item[fields].toString().toLowerCase().includes(value.toString().toLowerCase())) {
        return items
      } else {
        if (
          typeof(fields) === 'object' && item[fields[0]].toString().toLowerCase().includes(value.toString().toLowerCase()) ||
          typeof(fields) === 'object' && item[fields[1]].toString().toLowerCase().includes(value.toString().toLowerCase()) 
          ) {
          return items
        }
      }
    })

}

}
