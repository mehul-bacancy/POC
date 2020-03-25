import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  userData : Observable<firebase.User>
  constructor(
    private router: Router,
    private angularFireDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) 
  {
    this.userData = afAuth.authState;
  }

  login(email: string, password: string){
    this.afAuth
    .auth.signInWithEmailAndPassword(email, password)
    .then(res=> {
      console.log('Successfully Login');
      this.router.navigateByUrl('/pre-landing/dash-board');
      localStorage.setItem('token',JSON.stringify(this.afAuth.auth.currentUser.uid));
    })
    .catch(err=> {
      console.log('something is Wrong:', err.message);
    })
  }

  register(email: string, password: string){
    this.afAuth
    .auth.createUserWithEmailAndPassword(email, password)
    .then(res=> {
      console.log('Successfully Registered' ,res);
      this.router.navigateByUrl('auth/login');
    })
    .catch(err=> {
      console.log('Something is wrong:',err.message);
    })
  }

  forgetPassword(email: string){
    this.afAuth
    .auth.sendPasswordResetEmail(email)
    .then(
      ()=>
         alert("to reset password go to your Email")
    )
  }
  // register(formData) {
  //   this.afAuth.auth.createUserWithEmailAndPassword(
  //     formData.value.email, formData.value.password
  //   ).
  //     then(
  //       () => {
  //         localStorage.setItem('uid', this.afAuth.auth.currentUser.uid)
  //         this.angularFireDatabase.object('/users/' + localStorage.getItem('uid') + '/userDetails').set({
  //           eamilsdjfksgdf: formData.value.email
  //         })
  //         this.router.navigateByUrl('auth/login')
  //       }
  //     ).
  //     catch(
  //       (error) => {
  //         alert(error['message'])
  //       }
  //     )
  // }

  // login(formData) {
  //   this.afAuth.auth.signInWithEmailAndPassword(
  //     formData.value.email, formData.value.password
  //   ).
  //     then(
  //       () => {
  //         localStorage.setItem('token',JSON.stringify(this.afAuth.auth.currentUser.uid))
  //         this.router.navigateByUrl('/master/dashBoard')
  //       }
  //     ).
  //     catch(
  //       (err) => {
  //        alert(err['message'])
  //       }
  //     )
  // }

  // forgetPassword(formData) {
  //   this.afAuth.auth.sendPasswordResetEmail(
  //     formData.value.email
  //   ).
  //     then(
  //       ()=>
  //        alert("to reset password go to your Email")
  //     )
  // }
}
