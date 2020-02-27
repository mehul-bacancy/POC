import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: 'master',
    loadChildren:()=>import('./master/master.module').then(master=>master.MasterModule),
    // canLoad: [CanLoadGuard]
  },
  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
