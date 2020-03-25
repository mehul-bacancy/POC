import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase, AngularFireList,} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Iorder } from '../models/order.interface';
import { IProduct } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderRef: AngularFireList<Iorder>;
  id: number;
  // showModal : boolean = false;
  // showCenter : boolean = false;
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

  // showHideCenterModal(){
  //   this.showCenter = !this.showCenter;
  // }
  // showHidemodal(){
  //   this.showModal = !this.showModal;
  // }
}
