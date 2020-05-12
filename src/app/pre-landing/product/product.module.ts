import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from 'src/app/guards/can-activate.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideModalComponent } from 'src/app/modals/side-modal/side-modal.component';
import { CenterModalComponent } from 'src/app/modals/center-modal/center-modal.component';
import { InputBorderColorDirective } from 'src/app/core/directives/input-border-color.directive';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        redirectTo: 'product-details',
        pathMatch: 'full'
      },
      {
        path: 'product-details',
        component: ProductDetailsComponent,
        canActivate: [CanActivateGuard]

      },

    ]
  }
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    InputBorderColorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    PaginationModule.forRoot(),
    NgxPaginationModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule
  ],
  entryComponents: [
    SideModalComponent,
    AddEditProductComponent,
    CenterModalComponent
  ]
})
export class ProductModule { }
