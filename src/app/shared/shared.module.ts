import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideModalComponent } from '../modals/side-modal/side-modal.component';
import { AddEditOrderComponent } from '../pre-landing/order/add-edit-order/add-edit-order.component';
import { CenterModalComponent } from '../modals/center-modal/center-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvanceSearchComponent } from '../pre-landing/order/advance-search/advance-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditProductComponent } from '../pre-landing/product/add-edit-product/add-edit-product.component';
import { LoadinSpinnerComponent } from '../core/loadin-spinner/loadin-spinner.component';



@NgModule({
  declarations: [
    SideModalComponent,
    AddEditOrderComponent,
    AdvanceSearchComponent,
    CenterModalComponent,
    LoadinSpinnerComponent,
    AddEditProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    SideModalComponent,
    AddEditOrderComponent,
    AdvanceSearchComponent,
    CenterModalComponent,
    AddEditProductComponent,
    LoadinSpinnerComponent
  ]
})
export class SharedModule { }
