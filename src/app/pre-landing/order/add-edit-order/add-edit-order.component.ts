import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Iorder } from 'src/app/models/order.interface';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrls: ['./add-edit-order.component.scss']
})
export class AddEditOrderComponent implements OnInit {
  data: Iorder;
  orderLength:number;
  @Input() public editOrder:Iorder;
  
  constructor(private _orderService:OrderService,
    private activeModal:NgbActiveModal,
    private fb: FormBuilder,
    private angularFireDatabase: AngularFireDatabase ) { }
  
 
  orderForm = this.fb.group({
    customerName: ["", Validators.required],
    address: ["", Validators.required],
    city: ["", Validators.required],
    shipper: ["", Validators.required],
    orderDate: ["", Validators.required],
    orderTotal: [""]
  })
  ngOnInit() {
    this.getOrders();

    if (this.editOrder) {
      console.log('hello');
      this.orderForm.patchValue({
        id: this.editOrder.id,
        customerName: this.editOrder.customerName,
        address: this.editOrder.address,
        city: this.editOrder.city,
        shipper: this.editOrder.shipper,
        orderDate: this.editOrder.orderDate,
        orderTotal: this.editOrder.orderTotal
      })
     

    }


  }

    getOrders() {
      this._orderService.getOrdersData().subscribe(data => {
        this.orderLength = data.length
       
  
      })
  }


  onSubmit()
{
  if (this.editOrder) {

    console.log('update')

    let data = {
      id: this.editOrder.id,
      customerName: this.orderForm.controls['customerName'].value,
      address: this.orderForm.controls['address'].value,
      city: this.orderForm.controls['city'].value,
      shipper: this.orderForm.controls['shipper'].value,
      orderDate: this.orderForm.controls['orderDate'].value,
      orderTotal: this.orderForm.controls['orderTotal'].value,
    }
    this._orderService.updateOrder(data);


  }
 
 else
 { console.log('add');
  let sub = this.angularFireDatabase.list('/orders').valueChanges().subscribe(orders => {
    this.data = 
    {
      id: orders.length + 1,
      customerName: this.orderForm.controls['customerName'].value,
      address: this.orderForm.controls['address'].value,
      city: this.orderForm.controls['city'].value,
      shipper: this.orderForm.controls['shipper'].value,
      orderDate: this.orderForm.controls['orderDate'].value,
      orderTotal: this.orderForm.controls['orderTotal'].value,
    }
    
    this._orderService.addOrder(this.data);
    sub.unsubscribe()
  });
  }
}
  // isShow: boolean;
  // orders: Iorder[];
  // orderId: number=0;
  // orderObj: Iorder = {address:'', city:'', customerName:'', id: 0, orderDate:'', orderTotal:0, shipper: ''}
  // addOrderForm: FormGroup = new FormGroup({
  //   'customerName': new FormControl(this.orderObj['customerName'], Validators.required),
  //   'address': new FormControl(this.orderObj['address'], Validators.required),
  //   'city': new FormControl(this.orderObj['city'], Validators.required),
  //   'shipper': new FormControl(this.orderObj['shipper'], Validators.required),
  //   'orderDate': new FormControl(this.orderObj['orderDate'], Validators.required),
  //   'orderTotal': new FormControl(this.orderObj['orderTotal'], Validators.required)
  // });
  // constructor(
  //   private _orderService: OrderService,
  //   private router: Router
  // ) { }

  // ngOnInit() {
  //   this.orderId = this._orderService.orderId;
  //   if(this.orderId){
  //     this._orderService.getOrdersData().subscribe(data=>
  //       {data.find(p=>{
  //         this.orderObj = p;
  //         debugger;
  //         console.log(this.orderObj)
  //        this.addOrderForm = new FormGroup({
  //           'customerName': new FormControl(this.orderObj['customerName'], Validators.required),
  //           'address': new FormControl(this.orderObj['address'], Validators.required),
  //           'city': new FormControl(this.orderObj['city'], Validators.required),
  //           'shipper': new FormControl(this.orderObj['shipper'], Validators.required),
  //           'orderDate': new FormControl(this.orderObj['orderDate'], Validators.required),
  //           'orderTotal': new FormControl(this.orderObj['orderTotal'], Validators.required)
  //         });
  //       })})

  //   }
  //   this.isShow = true;
  //   this.getOrders();
  // }

  // getOrders(){
  //   this._orderService.getOrdersData().subscribe(data=>
  //     {
  //       this.orders = data;
  //     })
  // }
  // isShowModal(){
  //   this._orderService.showHidemodal();
  // }

  // onUpdate() {
  //   let oid = this.orders.length
  //   console.log(oid)
  //   if (this.orderId == 0) {
    
  //     const data = {
  //       id: oid+1,
  //       customerName: this.addOrderForm.controls.customerName.value,
  //       address: this.addOrderForm.controls.address.value,
  //       city: this.addOrderForm.controls.city.value,
  //       shipper: this.addOrderForm.controls.shipper.value,
  //       orderDate: this.addOrderForm.controls.orderDate.value,
  //       orderTotal: this.addOrderForm.controls.orderTotal.value
  //     }
  //     console.log(data)
  //     this._orderService.addOrder(data);
  //   }
  //   this.router.navigateByUrl('/pre-landing/order/order-details')
  // }
}
