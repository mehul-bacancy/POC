import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  constructor(
    private router: Router,
    private angularFireDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { }

  register(formData) {
    this.afAuth.auth.createUserWithEmailAndPassword(
      formData.value.email, formData.value.password
    ).
      then(
        () => {
          localStorage.setItem('uid', this.afAuth.auth.currentUser.uid)
          this.angularFireDatabase.object('/users/' + localStorage.getItem('uid') + '/userDetails').set({
            eamilsdjfksgdf: formData.value.email
          })
          this.router.navigateByUrl('auth/login')
        }
      ).
      catch(
        (error) => {
          alert(error['message'])
        }
      )
  }

  login(formData) {
    this.afAuth.auth.signInWithEmailAndPassword(
      formData.value.email, formData.value.password
    ).
      then(
        () => {
          localStorage.setItem('token',JSON.stringify(this.afAuth.auth.currentUser.uid))
          this.router.navigateByUrl('/master/dashBoard')
        }
      ).
      catch(
        (err) => {
         alert(err['message'])
        }
      )
  }
  forgetPassword(formData) {
    this.afAuth.auth.sendPasswordResetEmail(
      formData.value.email
    ).
      then(
        ()=>
         alert("to reset password go to your Email")
      )
  }
}
