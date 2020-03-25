import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from 'src/app/gaurds/can-activate.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes =[
  {
    path:'',
    component:ProductComponent,
    children:[
      {
        path:'',
        redirectTo: 'product-details',
        pathMatch: 'full'
      },
      { 
        path: 'product-details',
        component: ProductComponent,
        canActivate: [CanActivateGuard]
        
      },
      {
        path: 'add-edit',
        component: AddEditProductComponent
      }
    ]
  } 
];

@NgModule({
  declarations: [AddEditProductComponent, ProductDetailsComponent, ProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    
  ]
})
export class ProductModule { }
