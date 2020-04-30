import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes =[
  {
    path:'',
    component: AuthenticationComponent,
    children:[
      {
        path:'login',
        component: LoginComponent
      },
      {
        path: '',
        redirectTo:'login',
        pathMatch: 'full'
      },
      { 
        path: 'register',
        component: RegistrationComponent
      },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent
      },
     
    ]
  } 
];
@NgModule({
  declarations: [
    AuthenticationComponent, 
    LoginComponent, 
    RegistrationComponent, 
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
