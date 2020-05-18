import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProtectGuard } from './guards/protect.guard';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  { 
    path:'auth',
    loadChildren:()=>import('./authentication/authentication.module').then(auth=>auth.AuthenticationModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pre-landing',
    loadChildren: ()=> import('./pre-landing/pre-landing.module').then(pre=>pre.PreLandingModule),
    canActivate: [ProtectGuard]
  },
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
  
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
