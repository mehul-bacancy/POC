import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Location } from '@angular/common'

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  userData: Observable<firebase.User>

  constructor(
    private router: Router,
    private angularFireDatabase: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private location: Location
  ) {
    this.userData = angularFireAuth.authState;
  }

   //registration
   register(email, password)
   {
     
    this.angularFireAuth.auth.createUserWithEmailAndPassword(
     email, password
    ).
    then(()=>{
      // window.localStorage.setItem('uid',this.angularFireAuth.auth.currentUser.uid)
      this.angularFireDatabase.object('/users/' + localStorage.getItem('uid') + '/userDetails').set({
       email: email, password: password
      })
      
     this.router.navigateByUrl('/auth/login')
     }).catch((err)=>{
     alert(err['message'])
     this.router.navigateByUrl('/auth/register')
    })
   
   }
 
   //login
   login(email, password)
   {
     

     this.angularFireAuth.auth.signInWithEmailAndPassword(
       email, password
     ).then(()=>{
      localStorage.setItem('uid', JSON.stringify(this.angularFireAuth.auth.currentUser.uid));
    //  this.router.navigateByUrl('/pre-landing/dash-board', {skipLocationChange:true}).then(()=>{ 
    //    this.router.navigate(['/pre-landing/dash-board'])
    //  })
    this.router.navigate(['/pre-landing/dashboard'])
     return true;
     }).catch((err)=>{
     alert(err['message'])
   })
   }
 
   //forgetPassword
   forgetPassword(email)
   {
   
     this.angularFireAuth.auth.sendPasswordResetEmail(email).then(()=>{
       alert("email sent")
      this.router.navigateByUrl('/auth/login')
 
     })
   }
}
