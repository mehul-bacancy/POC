import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase, AngularFireList,} from '@angular/fire/database';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { IProduct } from '../models/product.interface';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsRef: AngularFireList<IProduct>;
  id:number;
  product: IProduct;
  showModal : boolean = false;
  // showModal = new BehaviorSubject <boolean> ;
  constructor(   
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth) { 
      this.productsRef=this.afDatabase.list('/products');
      // this.showModal = new BehaviorSubject(this.isShowModal);
      
    }
   showHidemodal(){
     this.showModal = ! this.showModal;
   }
    //   this.isShowModal.next(!this.isShowModal);
    // }

    getData(start: number, end: number):Observable<IProduct[]>
    {
      return this.afDatabase.list<IProduct>('/products', ref => ref.orderByChild('id').startAt(start).endAt(end)).valueChanges()
    } 

    getAllData():Observable<IProduct[]>{
      return this.afDatabase.list<IProduct>('/products').valueChanges();
    }

    getAllDatas(prodId){
      return this.afDatabase.database.ref(`/products/${prodId}`);
    }

    updateProduct(Key, value: IProduct){
      this.productsRef.update(Key, value);
    
    }
    
    addProduct(product){
      console.log('service',product)
      this.afDatabase.object('/products/' + (product.id - 1)).set(product)
    }

    getSuppliersOrCategories(property) {
      property = property.filter((data, index) => {
      if(index != 0) {
      if(property.slice(0, index).indexOf(data) == -1) {
      return data
      }
      } else {
      return data
      }
      })
      return property
      }
}
