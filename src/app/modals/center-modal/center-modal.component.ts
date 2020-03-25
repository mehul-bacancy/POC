import { Component, OnInit, Input } from '@angular/core';
import { Iorder } from 'src/app/models/order.interface';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from 'src/app/models/product.interface';

@Component({
  selector: 'app-center-modal',
  templateUrl: './center-modal.component.html',
  styleUrls: ['./center-modal.component.scss']
})
export class CenterModalComponent implements OnInit {
  @Input() public product:IProduct;
  @Input() public order:Iorder;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
