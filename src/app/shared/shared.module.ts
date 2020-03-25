import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideModalComponent } from '../modals/side-modal/side-modal.component';
import { AddEditOrderComponent } from '../pre-landing/order/add-edit-order/add-edit-order.component';

import { CenterModalComponent } from '../modals/center-modal/center-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditComponent } from '../pre-landing/master/add-edit/add-edit.component';



@NgModule({
  declarations: [
    SideModalComponent,
    AddEditOrderComponent,
    
    CenterModalComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    SideModalComponent,
    AddEditOrderComponent,
    
    CenterModalComponent,
    AddEditComponent
    ]
})
export class SharedModule { }
