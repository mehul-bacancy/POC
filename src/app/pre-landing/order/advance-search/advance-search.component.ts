import { Component, OnInit } from '@angular/core';
import { Iorder } from 'src/app/models/order.interface';
import { OrderService } from 'src/app/services/order.service';
import { NgbDateStruct, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { AdvanceSearchPipe } from 'src/app/core/pipes/advance-search.pipe';
import { IadvanceSearch } from 'src/app/models/advanceSearch.interface';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss']
})
export class AdvanceSearchComponent implements OnInit {

  orders: Iorder[] = [];
  customerName: Iorder[] = [];
  shipper: Iorder[] = [];
  model: NgbDateStruct;
  filteredOrders: Iorder[] = [];
  searchObj: Iorder;
  selectedShipper: [];
  selectedFields: IadvanceSearch;

  constructor(private _OrderService: OrderService,
    private fb: FormBuilder,
    private activeModal: NgbActiveModal,
    private searchFilter: AdvanceSearchPipe) { }

  advanceSearchForm = this.fb.group({
    selectedShippers: [, [Validators.required]],
    selectedCustomerNames: [, [Validators.required]],
    selectedFromDate: [, [Validators.required]],
    selectedToDate: [, [Validators.required]],
    selectedFromAmount: [, [Validators.required]],
    selectedToAmount: [, [Validators.required]],
  })

  ngOnInit() {
    this._OrderService.getOrdersData().subscribe(data => {
      this.orders = data;

      this.filteredOrders = data;
      this.customerName = this._OrderService.getCustomerNameOrShipper(data.map(data => data['customerName']));
      this.shipper = this._OrderService.getCustomerNameOrShipper(data.map(data => data['shipper']));
    })
  }

  get selectedShippers() {
    return this.advanceSearchForm.get('selectedShippers')
  }

  get selectedCustomerNames() {
    return this.advanceSearchForm.get('selectedCustomerNames')
  }

  onSubmit() {
    this.orders = this.searchFilter.transform(this.filteredOrders, this.advanceSearchForm.value);
    this._OrderService.filterdData(this.orders);
    this.activeModal.close();
  }

}
