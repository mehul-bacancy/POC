import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreLandingComponent } from './pre-landing.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';


const routes: Routes=[
  {
    path: '',
    component: PreLandingComponent,
    children:[
      {
        path: '',
        redirectTo: 'dash-board',
        pathMatch: 'full'
      },
      {
        path: 'dash-board',
        component: DashBoardComponent
      },
      {
        path: 'product',
        loadChildren: ()=>import('./product/product.module').then(product=>product.ProductModule)
      },
      {
        path: 'order',
        loadChildren:()=> import('./order/order.module').then(order=>order.OrderModule)
      }
    ]
  }
]

@NgModule({
  declarations: [PreLandingComponent,
    HeaderComponent,
    DashBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PreLandingModule { }
