import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  model= {
    email: '',
    password: '',
    confirmPassword: ''
  };
  constructor(private router: Router, public _AuthenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  // navigateToLogin(){
  //   this.router.navigateByUrl('auth/login');
  // }
}
