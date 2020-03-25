import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { StockGridComponent } from './stock-grid/stock-grid.component';
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { NgxPaginationModule } from 'ngx-pagination';

import { CanActivateGuard } from '../../gaurds/can-activate.guard';
import { SharedModule } from 'src/app/shared/shared.module';
import { SideModalComponent } from 'src/app/modals/side-modal/side-modal.component';
import { CenterModalComponent } from 'src/app/modals/center-modal/center-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes =[
  {
    path:'',
    component:MasterComponent,
    children:[
      {
        path:'',
        redirectTo: 'product',
        pathMatch: 'full'
      },
      { 
        path: 'product',
        component: ProductComponent,
        canActivate: [CanActivateGuard]
        
      },
      {
        path: 'stockGrid',
        component: StockGridComponent
      },
    ]
  } 
];

@NgModule({
  declarations: [
    MasterComponent,
    DashboardComponent, 
    ProductComponent, 
    StockGridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes), 
    PaginationModule.forRoot(),
    NgxPaginationModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
  ],
  entryComponents:[
    SideModalComponent,
    AddEditComponent,
    CenterModalComponent
  ]
})
export class MasterModule { }
