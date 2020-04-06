import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Iorder } from '../../models/order.interface';
import { IadvanceSearch } from '../../models/advanceSearch.interface';

@Pipe({
  name: 'advanceSearch'
})
@Injectable({
  providedIn: 'root'
})
export class AdvanceSearchPipe implements PipeTransform {

  transform(items: Iorder[], selectedFields: IadvanceSearch): Iorder[] {

    return items.filter(item => {
      console.log(selectedFields);
      if ((selectedFields.selectedToAmount != 0) && (selectedFields.selectedCustomerNames == null && selectedFields.selectedFromDate == null && selectedFields.selectedShippers == null && selectedFields.selectedFromAmount == null && selectedFields.selectedToDate == null)) {
        return item['orderTotal'] <= selectedFields.selectedToAmount
      }

      if ((selectedFields.selectedFromAmount != 0) && (selectedFields.selectedCustomerNames == null && selectedFields.selectedFromDate == null && selectedFields.selectedShippers == null && selectedFields.selectedToAmount == null && selectedFields.selectedToDate == null)) {
        return item['orderTotal'] >= selectedFields.selectedFromAmount

      }
      if ((selectedFields.selectedCustomerNames && selectedFields.selectedShippers == null) && (selectedFields.selectedFromAmount == null && selectedFields.selectedFromDate == null && selectedFields.selectedShippers == null && selectedFields.selectedToAmount == null && selectedFields.selectedToDate == null)) {
        return selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedCustomerNames == null) && (selectedFields.selectedFromAmount == null && selectedFields.selectedFromDate == null && selectedFields.selectedCustomerNames == null && selectedFields.selectedToAmount == null && selectedFields.selectedToDate == null)) {
        return selectedFields.selectedShippers.indexOf(item['shipper']) > -1
      }

      if ((selectedFields.selectedFromDate) &&
        (selectedFields.selectedFromAmount == null && selectedFields.selectedShippers == null && selectedFields.selectedCustomerNames == null && selectedFields.selectedToAmount == null && selectedFields.selectedToDate == null)) {
        return item['orderDate'] >= selectedFields.selectedFromDate;
      }

      if ((selectedFields.selectedToDate) && (selectedFields.selectedFromAmount == null && selectedFields.selectedFromDate == null && selectedFields.selectedCustomerNames == null && selectedFields.selectedToAmount == null && selectedFields.selectedShippers == null)) {
        return item['orderDate'] <= selectedFields.selectedFromDate;
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedCustomerNames) && (selectedFields.selectedFromAmount == null && selectedFields.selectedFromDate == null && selectedFields.selectedToAmount == null && selectedFields.selectedToDate == null)) {
        return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) && (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedFromDate) &&
        (selectedFields.selectedCustomerNames == null && selectedFields.selectedFromAmount == null && selectedFields.selectedToAmount == null && selectedFields.selectedToDate == null)) {
        return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) && (item['orderDate'] >= selectedFields.selectedFromDate)
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedToDate) &&
        (selectedFields.selectedCustomerNames == null && selectedFields.selectedFromAmount == null && selectedFields.selectedToAmount == null && selectedFields.selectedFromDate == null)) {
        return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) && (item['orderDate'] <= selectedFields.selectedToDate)
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedFromAmount) &&
        (selectedFields.selectedCustomerNames == null && selectedFields.selectedToAmount == null && selectedFields.selectedFromDate == null && selectedFields.selectedToDate == null)) {
        {
          return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) && (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
        }
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedToAmount) &&
        (selectedFields.selectedCustomerNames == null && selectedFields.selectedFromAmount == null && selectedFields.selectedFromDate == null && selectedFields.selectedToDate == null)) {
        {
          return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) && (item['orderTotal'] <= selectedFields.selectedToAmount)
        }
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedCustomerNames && selectedFields.selectedFromDate) &&
        (selectedFields.selectedFromAmount == null && selectedFields.selectedToAmount == null && selectedFields.selectedToDate == null)) {
        {
          return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) &&
            (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderDate'] >= selectedFields.selectedFromDate)
        }
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedCustomerNames && selectedFields.selectedToDate) &&
        (selectedFields.selectedFromAmount == null && selectedFields.selectedToAmount == null && selectedFields.selectedFromDate == null)) {
        {
          return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) &&
            (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderDate'] <= selectedFields.selectedToDate)
        }
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedCustomerNames && selectedFields.selectedFromAmount) &&
        (selectedFields.selectedToDate == null && selectedFields.selectedToAmount == null && selectedFields.selectedFromDate == null)) {
        {
          return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) &&
            (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderTotal'] >= selectedFields.selectedFromAmount)
        }
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedCustomerNames && selectedFields.selectedToAmount) &&
        (selectedFields.selectedToDate == null && selectedFields.selectedFromAmount == null && selectedFields.selectedFromDate == null)) {
        {

          return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) &&
            (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderTotal'] <= selectedFields.selectedToAmount)

        }
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedCustomerNames && selectedFields.selectedFromDate && selectedFields.selectedToDate) &&
        (selectedFields.selectedFromAmount == null && selectedFields.selectedToAmount == null)) {
        {

          return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) &&
            (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderDate'] >= selectedFields.selectedFromDate) &&
            (item['orderDate'] <= selectedFields.selectedToDate)

        }
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedCustomerNames && selectedFields.selectedFromDate && selectedFields.selectedFromAmount) &&
        (selectedFields.selectedToDate == null && selectedFields.selectedToAmount == null)) {
        {
          return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) &&
            (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderDate'] >= selectedFields.selectedFromDate) &&
            (item['orderTotal'] >= selectedFields.selectedFromAmount)
        }
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedCustomerNames && selectedFields.selectedFromDate && selectedFields.selectedToAmount) &&
        (selectedFields.selectedToDate == null && selectedFields.selectedFromAmount == null)) {
        {

          return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) &&
            (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderDate'] >= selectedFields.selectedFromDate) &&
            (item['orderTotal'] <= selectedFields.selectedToAmount)
        }
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedCustomerNames && selectedFields.selectedFromDate && selectedFields.selectedToDate && selectedFields.selectedFromAmount) &&
        (selectedFields.selectedToAmount == null)) {
        {
          return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) &&
            (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderDate'] >= selectedFields.selectedFromDate) &&
            (item['orderDate'] <= selectedFields.selectedToDate) &&
            (item['orderTotal'] >= selectedFields.selectedFromAmount)
        }
      }

      if ((selectedFields.selectedShippers && selectedFields.selectedCustomerNames && selectedFields.selectedFromDate && selectedFields.selectedToDate && selectedFields.selectedToAmount) &&
        (selectedFields.selectedFromAmount == null)) {
        {
            return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) &&
            (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderDate'] >= selectedFields.selectedFromDate)
            && (item['orderDate'] <= selectedFields.selectedToDate)
            && (item['orderTotal'] <= selectedFields.selectedToAmount)
        }
      }

      //six fileds
      if (selectedFields.selectedShippers && selectedFields.selectedCustomerNames && selectedFields.selectedFromDate && selectedFields.selectedToDate && selectedFields.selectedToAmount && selectedFields.selectedFromAmount)
       {
        return (selectedFields.selectedShippers.indexOf(item['shipper']) > -1) &&
          (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
          && (item['orderDate'] >= selectedFields.selectedFromDate)
          && (item['orderDate'] <= selectedFields.selectedToDate)
          && (item['orderTotal'] >= selectedFields.selectedFromAmount)
          && (item['orderTotal'] <= selectedFields.selectedToAmount)
      }

      //customerName && OrderDateFrom
      if ((selectedFields.selectedCustomerNames && selectedFields.selectedFromDate) && (selectedFields.selectedFromAmount == null && selectedFields.selectedToDate == null && selectedFields.selectedShippers == null && selectedFields.selectedToAmount == null)) {
        return (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1) &&
          (item['orderDate'] >= selectedFields.selectedFromDate)
      }

      //customerName && OrderDateTo
      if ((selectedFields.selectedCustomerNames && selectedFields.selectedToDate) && (selectedFields.selectedFromAmount == null && selectedFields.selectedFromDate == null && selectedFields.selectedShippers == null && selectedFields.selectedToAmount == null)) {
        return (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1) &&
          (item['orderDate'] <= selectedFields.selectedToDate)
      }

      //customerName && selectedFromAmount
      if ((selectedFields.selectedCustomerNames && selectedFields.selectedFromAmount) && (selectedFields.selectedToDate == null && selectedFields.selectedFromDate == null && selectedFields.selectedShippers == null && selectedFields.selectedToAmount == null)) {
        return (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1) &&
          (item['orderTotal'] >= selectedFields.selectedFromAmount)
      }


      //customerName && selectedToAmount
      if ((selectedFields.selectedCustomerNames && selectedFields.selectedToAmount) && (selectedFields.selectedToDate == null && selectedFields.selectedFromDate == null && selectedFields.selectedShippers == null && selectedFields.selectedFromAmount == null)) {
        return (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1) &&
          (item['orderTotal'] <= selectedFields.selectedToAmount)
      }

      ///customerName && OrderDateFrom && orderDateTo
      if ((selectedFields.selectedCustomerNames && selectedFields.selectedFromDate && selectedFields.selectedToDate) &&
        (selectedFields.selectedFromAmount == null && selectedFields.selectedToAmount == null && selectedFields.selectedShippers == null)) {
        {
          return (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderDate'] >= selectedFields.selectedFromDate) &&
            (item['orderDate'] <= selectedFields.selectedToDate)
        }
      }

      ///customerName && OrderDateFrom && orderAmountFrom
      if ((selectedFields.selectedCustomerNames && selectedFields.selectedFromDate && selectedFields.selectedFromAmount) &&
        (selectedFields.selectedToDate == null && selectedFields.selectedToAmount == null && selectedFields.selectedShippers == null)) {
        {
          return (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderDate'] >= selectedFields.selectedFromDate) &&
            (item['orderTotal'] >= selectedFields.selectedFromAmount)
        }
      }

      ///customerName && OrderDateFrom && orderAmountTo
      if ((selectedFields.selectedCustomerNames && selectedFields.selectedFromDate && selectedFields.selectedToAmount) &&
        (selectedFields.selectedToDate == null && selectedFields.selectedFromAmount == null && selectedFields.selectedShippers == null)) {
        {
          return (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderDate'] >= selectedFields.selectedFromDate) &&
            (item['orderTotal'] <= selectedFields.selectedToAmount)
        }
      }

      /////customerName && OrderDateFrom && orderDateTo && orderTotalFrom
      if ((selectedFields.selectedCustomerNames && selectedFields.selectedFromDate && selectedFields.selectedToDate && selectedFields.selectedFromAmount) &&
        (selectedFields.selectedToAmount == null && selectedFields.selectedShippers == null)) {
        {
          return (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderDate'] >= selectedFields.selectedFromDate) &&
            (item['orderDate'] <= selectedFields.selectedToDate) &&
            (item['orderTotal'] >= selectedFields.selectedFromAmount)
        }
      }

      //customerName && OrderDateFrom && orderDateTo && orderTotalTo
      if ((selectedFields.selectedCustomerNames && selectedFields.selectedFromDate && selectedFields.selectedToDate && selectedFields.selectedToAmount) &&
        (selectedFields.selectedFromAmount == null && selectedFields.selectedShippers == null)) {
        {
          return (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
            && (item['orderDate'] >= selectedFields.selectedFromDate) &&
            (item['orderDate'] <= selectedFields.selectedToDate) &&
            (item['orderTotal'] <= selectedFields.selectedToAmount)
        }
      }

      //Five fileds
      if ((selectedFields.selectedCustomerNames && selectedFields.selectedFromDate && selectedFields.selectedToDate && selectedFields.selectedToAmount && selectedFields.selectedFromAmount)
        && (selectedFields.selectedShippers == null)) {
        return (selectedFields.selectedCustomerNames.indexOf(item['customerName']) > -1)
          && (item['orderDate'] >= selectedFields.selectedFromDate)
          && (item['orderDate'] <= selectedFields.selectedToDate)
          && (item['orderTotal'] >= selectedFields.selectedFromAmount)
          && (item['orderTotal'] <= selectedFields.selectedToAmount)
      }

      //orderfromdate && orderToDate
      if ((selectedFields.selectedFromDate && selectedFields.selectedToDate) &&
        (selectedFields.selectedShippers == null && selectedFields.selectedCustomerNames == null && selectedFields.selectedFromAmount == null && selectedFields.selectedToAmount == null)) {
        return (item['orderDate'] >= selectedFields.selectedFromDate)
          && (item['orderDate'] <= selectedFields.selectedToDate)
      }

      //orderFromDate && orderFromAmount 
      if ((selectedFields.selectedFromDate && selectedFields.selectedFromAmount) &&
        (selectedFields.selectedShippers == null && selectedFields.selectedCustomerNames == null && selectedFields.selectedToDate == null && selectedFields.selectedToAmount == null)) {
        return (item['orderDate'] >= selectedFields.selectedFromDate) && (item['orderTotal'] >= selectedFields.selectedFromAmount)
      }

      //orderFromDate && orderToAmount 
      if ((selectedFields.selectedFromDate && selectedFields.selectedToAmount) &&
        (selectedFields.selectedShippers == null && selectedFields.selectedCustomerNames == null && selectedFields.selectedToDate == null && selectedFields.selectedFromAmount == null)) {
        return (item['orderDate'] >= selectedFields.selectedFromDate) && (item['orderTotal'] <= selectedFields.selectedToAmount)
      }

      //orderfromdate && orderToDate && orderFromAmount
      if ((selectedFields.selectedFromDate && selectedFields.selectedToDate && selectedFields.selectedFromAmount) &&
        (selectedFields.selectedShippers == null && selectedFields.selectedCustomerNames == null && selectedFields.selectedToAmount == null)) {
        return (item['orderDate'] >= selectedFields.selectedFromDate)
          && (item['orderDate'] <= selectedFields.selectedToDate) &&
          (item['orderTotal'] >= selectedFields.selectedFromAmount)
      }

      //orderfromdate && orderToDate && orderToAmount
      if ((selectedFields.selectedFromDate && selectedFields.selectedToDate && selectedFields.selectedToAmount) &&
        (selectedFields.selectedShippers == null && selectedFields.selectedCustomerNames == null && selectedFields.selectedFromAmount == null)) {
        return (item['orderDate'] >= selectedFields.selectedFromDate)
          && (item['orderDate'] <= selectedFields.selectedToDate) &&
          (item['orderTotal'] <= selectedFields.selectedToAmount)
      }

      //FourFields
      if ((selectedFields.selectedFromDate && selectedFields.selectedToDate && selectedFields.selectedFromAmount && selectedFields.selectedToAmount) &&
        (selectedFields.selectedShippers == null && selectedFields.selectedCustomerNames == null)) {
        return (item['orderDate'] >= selectedFields.selectedFromDate)
          && (item['orderDate'] <= selectedFields.selectedToDate) &&
          (item['orderTotal'] >= selectedFields.selectedFromAmount) &&
          (item['orderTotal'] <= selectedFields.selectedToAmount)
      }

      //orderToDate && orderFromAmount 
      if ((selectedFields.selectedToDate && selectedFields.selectedFromAmount) &&
        (selectedFields.selectedShippers == null && selectedFields.selectedCustomerNames == null && selectedFields.selectedFromDate == null && selectedFields.selectedToAmount == null))
         {
        return (item['orderDate'] <= selectedFields.selectedToDate) && (item['orderTotal'] >= selectedFields.selectedFromAmount)
      }

      //orderToDate && orderToAmount 
      if ((selectedFields.selectedToDate && selectedFields.selectedToAmount) &&
        (selectedFields.selectedShippers == null && selectedFields.selectedCustomerNames == null && selectedFields.selectedFromDate == null && selectedFields.selectedFromAmount == null)) 
        {
        return (item['orderDate'] <= selectedFields.selectedToDate) && (item['orderTotal'] <= selectedFields.selectedToAmount)
      }

      //orderToDate && orderFromAmount  && orderToAmount
      if ((selectedFields.selectedToDate && selectedFields.selectedFromAmount && selectedFields.selectedToAmount) &&
        (selectedFields.selectedShippers == null && selectedFields.selectedCustomerNames == null && selectedFields.selectedFromDate == null)) 
        {
        return (item['orderDate'] <= selectedFields.selectedToDate) && (item['orderTotal'] >= selectedFields.selectedFromAmount) && (item['orderTotal'] <= selectedFields.selectedToAmount)
      }

      // orderFromAmount  && orderToAmount
      if ((selectedFields.selectedFromAmount && selectedFields.selectedToAmount) &&
        (selectedFields.selectedToDate == null && selectedFields.selectedShippers == null && selectedFields.selectedCustomerNames == null && selectedFields.selectedFromDate == null)) 
        {
        return (item['orderTotal'] >= selectedFields.selectedFromAmount) && (item['orderTotal'] <= selectedFields.selectedToAmount)
      }
    })
    //transform
  }
  //class

}
