import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model= {
    email: '',
    password: ''
  };
  constructor(private router: Router, public _AuthenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  // navigateToReg(){
  //   this.router.navigateByUrl('auth/register');
  // }
}
