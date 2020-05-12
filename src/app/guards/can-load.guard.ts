import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  constructor(private router: Router) { }

  canLoad(): boolean {
    if (localStorage.getItem("uid")) {
      return true;
    } else {
      this.router.navigate(['/auth/login'])
      // this.router.navigateByUrl('/auth/login', {skipLocationChange:true}).then(()=>{
      //   this.router.navigate(['/auth/login'])
      // })
      return false;
    }
  }
}
