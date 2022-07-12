import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authServ:AuthorizationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { NOTE THIS IS THE DEFAULT SYNTAX
    //   state: RouterStateSnapshot): boolean {
    // return true; - FOR ACTIVATING ROUTES USING GUARDS

    state: RouterStateSnapshot): boolean {
      if(!this.authServ.isAuthorised())
        return false; // If not authorised - will return false
      else
        return true; // else will allow page to v=be viewed/ authenticated


    
  }
  
}

// For purpose of learning, using only boolean to determine if user is authenticated or not
// Go to app routing module after this and import this file there - import { AuthGuard } from './auth.guard';
// To disable access to website - change the return value in the canActivate function to false, will not allow content to be vieweed and just display default page


// 