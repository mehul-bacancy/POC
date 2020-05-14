import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SideModalComponent } from 'src/app/modals/side-modal/side-modal.component';
import { AddEditOrderComponent } from './add-edit-order/add-edit-order.component';
import { CenterModalComponent } from 'src/app/modals/center-modal/center-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { ProtectGuard } from 'src/app/guards/protect.guard';


const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: '',
        redirectTo: 'order-details',
        pathMatch: 'full'
      },
      {
        path: 'order-details',
        component: OrderDetailsComponent,
        canActivate: [ProtectGuard]
      },

    ]
  }
];


@NgModule({
  declarations: [
    OrderComponent,
    OrderDetailsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgbModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  entryComponents: [
    SideModalComponent,
    AddEditOrderComponent,
    CenterModalComponent,
    AdvanceSearchComponent
  ]
})
export class OrderModule { }
