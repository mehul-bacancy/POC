import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Iorder } from '../models/order.interface';

@Pipe({
  name: 'searchOrder'
})
@Injectable({
  providedIn: 'root'
})
export class SearchOrderPipe implements PipeTransform {

  transform(items: Iorder[], searchText: string): Iorder[]
  {
      if (!items) {
          return []
        }
      
        return items.filter(item => {
        
        
            if (isNaN(parseInt(searchText)))
           {
              if (item['customerName'].toString().toLowerCase().includes(searchText.toLowerCase())) 
              {
                return items
              }
            } else 
            {
              if (item['id'].toString().toLowerCase().includes(searchText.toLowerCase()))
               {
                return items
               }
            }
          
      })
  }

}
