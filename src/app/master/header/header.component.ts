import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  navbarOpen: boolean=false;
  ngOnInit() {
  }

  toogleNavbar()
  {
    this.navbarOpen=!this.navbarOpen
  }

  logout(){
    localStorage.setItem('token', '');
    this.router.navigate(['auth/login']);
  }
}
