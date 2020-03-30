import { Component, OnInit, Input } from '@angular/core';
import { Iorder } from 'src/app/models/order.interface';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SideModalComponent } from 'src/app/modals/side-modal/side-modal.component';
import { CenterModalComponent } from 'src/app/modals/center-modal/center-modal.component';
import { ExcelService } from 'src/app/services/excel.service';
import { SearchOrderPipe } from 'src/app/pipes/search-order.pipe';
import { AdvanceSearchPipe } from 'src/app/pipes/advance-search.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  orders:Iorder[]=[];
  @Input() page = 1;
  @Input() pageSize = 10;
  @Input() collectionSize: number = 100;
 
  content:string="addOrder";
  searchItem:string;
  filteredOrders:Iorder[] = [];
  advanceSearchContent:string="advanceSearch";
 
  constructor(private _orderService:OrderService,private _orderFilter:SearchOrderPipe,private modalService:NgbModal,private _excelService:ExcelService) { }

  ngOnInit() {
    this.getAllOrderData();
    this._orderService.getFilteredObs().subscribe(filterData =>{ 
      // debugger
      this.orders=filterData;
      this.collectionSize=this.orders.length;
    });
   
  }


 
  getAllOrderData()
  {
  this._orderService.getOrdersData().subscribe(data=>
    {
      console.log(data);
      this.collectionSize = data.length;
      this.filteredOrders=data;
      this.orders=data;
    })
  }

  filterOrder($event){
     this.orders=this._orderFilter.transform(this.filteredOrders, this.searchItem);
    this.collectionSize = this.orders.length
  }


  openSideModal(content)
  {
     // console.log(content);
      const modalAddRef=this.modalService.open(SideModalComponent);
      modalAddRef.componentInstance.content=content;
  }

  openCenterModal(order:Iorder)
  {
    const modalRef=this.modalService.open(CenterModalComponent);
    modalRef.componentInstance.order=order;

  }

  openAdvanceSearchSideModal(advanceSearchcontent)
  {
    const modalSearchRef=this.modalService.open(SideModalComponent);
    modalSearchRef.componentInstance.advanceSearchcontent=advanceSearchcontent;
  }

  exportToExcel()
  {
    let fileName = 'orders.csv';
    let columnNames = ["Id", "Customer Name", "Shipper", "order Date", "Order Total"];
    this._excelService.exportToExcel(fileName, columnNames, this.orders.slice((this.page - 1)*this.pageSize, (this.page - 1)*this.pageSize + this.pageSize))
    }
  // orders: Iorder[];
  // content: string = "addOrder";
  // page = 1;
  // pageSize = 10;
  // collectionSize: number = 100;
  // searchItem: string;
  // filteredOrders: Iorder[] = [];
  // advanceSearchContent: string = "advanceSearch";
  
  // constructor(
  //   private _orderService: OrderService,
  //   private excelService: ExcelService,
  //   private router: Router,
  //   private _orderFilter: SearchOrderPipe,
  //   private _advanceSearch: AdvanceSearchPipe,
  //   private modalService: NgbModal
  // ) { }

  // ngOnInit() {
  //   this.getOrders();
  //   this._orderService.getFilteredObs().subscribe(filterData =>{
  //     this.orders=filterData;
  //     this.collectionSize=this.orders.length;
  //     });
  // }

  // getOrders() {
  //   this._orderService.getOrdersData().subscribe(
  //     data => {
  //       this.orders = data;
  //       this.collectionSize = data.length;
  //       this.filteredOrders = data;
  //     }
  //   )
  // }
  // open(content) {
  //   console.log(content);
  //   const modalAddRef = this.modalService.open(SideModalComponent);
  //   modalAddRef.componentInstance.content = content;
  // }

  // opencenterModal(order: Iorder) {
  //   const modalRef = this.modalService.open(CenterModalComponent);
  //   modalRef.componentInstance.order = order;

  // }

  // openAdvanceSearchSideModal(advanceSearchcontent)
  // {
  //   const modalSearchRef=this.modalService.open(SideModalComponent);
  //   modalSearchRef.componentInstance.advanceSearchcontent=advanceSearchcontent;
  // }

  // filterOrder($event) {
  //   this.orders = this._orderFilter.transform(this.filteredOrders, this.searchItem);
  //   this.collectionSize = this.orders.length
  // }

  // exportToExcel() {
  //   let fileName = 'orders.csv';
  //   let columnNames = ["Id", "Customer Name", "Shipper", "order Date", "City", "Order Total"];
  //   this.excelService.exportToExcel(fileName, columnNames, this.orders.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize))
  // }

}
