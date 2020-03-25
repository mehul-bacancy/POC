import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanLoadGuard } from './gaurds/can-load.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  { 
    path:'auth',
    loadChildren:()=>import('./authentication/authentication.module').then(auth=>auth.AuthenticationModule)
  },
  {
    path: 'pre-landing',
    loadChildren: ()=> import('./pre-landing/pre-landing.module').then(pre=>pre.PreLandingModule)
  },
  // {
  //   path: 'master',
  //   loadChildren:()=>import('./pre-landing/master/master.module').then(master=>master.MasterModule),
  //   canLoad: [CanLoadGuard]
  // },
  // {
  //   path: 'order',
  //   loadChildren:()=>import('./pre-landing/order/order.module').then(order=>order.OrderModule),
  //   canLoad: [CanLoadGuard]
  // },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
