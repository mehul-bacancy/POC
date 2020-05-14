import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Iuser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: Iuser = { email: "", password: "" }

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  //register
  register() {
    this.authenticationService.register(this.user.email, this.user.password)
  }
}
