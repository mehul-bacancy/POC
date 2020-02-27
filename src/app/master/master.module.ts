import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { StockGridComponent } from './stock-grid/stock-grid.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { NgxPaginationModule } from 'ngx-pagination';
import { AddProductComponent } from './add-product/add-product.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes =[
  {
    path:'',
    component:MasterComponent,
    children:[
      {
        path:'dashBoard',
        component: DashboardComponent
      },
      {
        path:'',
        redirectTo: 'dashBoard',
        pathMatch: 'full'
      },
      { 
        path: 'product',
        component: ProductComponent,
        // canActivate: [CanActivateGuard]
        
      },
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'stockGrid',
        component: StockGridComponent
      },
      {
        path: 'add',
        component: AddProductComponent
      },
      {
        path: 'edit/:id',
        component: AddProductComponent
      },
    ]
  } 
];

@NgModule({
  declarations: [
    MasterComponent,
    DashboardComponent, 
    ProductComponent, 
    OrderComponent, 
    StockGridComponent, 
    HeaderComponent, 
    FooterComponent, AddProductComponent, AddEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes), 
    PaginationModule.forRoot(),
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }
