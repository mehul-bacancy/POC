import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase, AngularFireList,} from '@angular/fire/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { Iorder } from '../models/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderRef: AngularFireList<Iorder>;
  id: number;
  private filteredData: BehaviorSubject<Iorder[]> = new BehaviorSubject([]);
  order: Iorder;
  orderId: number;
  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth
  ) { 
    this.orderRef = this.angularFireDatabase.list('/orders');
  }

  getOrdersData(): Observable<Iorder[]>{
    return this. angularFireDatabase.list<Iorder>('/orders').valueChanges();
  }

  addOrder(order: Iorder) {
    this.angularFireDatabase.object('/orders/' + (order.id - 1)).set(order);
  }

  updateOrder(order) {
    this.angularFireDatabase.object('/orders/' + (order.id - 1)).set(order);
  }

  getCustomerNameOrShipper(property) {
    property = property.filter((data, index) => {
      if (index != 0) {
        if (property.slice(0, index).indexOf(data) == -1) {
          return data
        }
      } else {
        return data
      }
    })
    return property
  }

  getFilteredObs(): Observable<Iorder[]> {
    return this.filteredData.asObservable();
    }
    
    
    filterdData(filterdObj:Iorder[])
    {
      console.log(filterdObj)
    this.filteredData.next(filterdObj);
    
    }
}
