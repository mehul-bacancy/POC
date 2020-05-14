import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  user: Iuser = { email: "" }
  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  forgetPassword() {
    this.authenticationService.forgetPassword(this.user.email);
  }
}
