import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreLandingComponent } from './pre-landing.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProtectGuard } from '../guards/protect.guard';

const routes: Routes = [
  {
    path: '',
    component: PreLandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ProtectGuard]
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(product => product.ProductModule),

      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(order => order.OrderModule),

      }
    ]
  }
]

@NgModule({
  declarations: [
    PreLandingComponent,
    HeaderComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule
  ]
})
export class PreLandingModule { }
