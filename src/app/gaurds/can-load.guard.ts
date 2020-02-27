import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  constructor(private router: Router) { }

  canLoad(): boolean {
    if(localStorage.getItem("token")) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
