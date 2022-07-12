import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { NOTE THIS IS THE DEFAULT SYNTAX
      state: RouterStateSnapshot): boolean {
    return true;
  }
  
}

// For purpose of learning, using only boolean to determine if user is authenticated or not
// Go to app routing module after this and import this file there - import { AuthGuard } from './auth.guard';
// To disable access to website - change the return value in the canActivate function to false, will not allow content to be vieweed and just display default page