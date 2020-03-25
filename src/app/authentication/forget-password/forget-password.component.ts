import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  model= {
    email: ''
  };
  constructor(public _AuthenticationService: AuthenticationService ) { }

  ngOnInit() {
  }

  forgetPassword(){
    this._AuthenticationService.forgetPassword(this.model.email);
  }
}
