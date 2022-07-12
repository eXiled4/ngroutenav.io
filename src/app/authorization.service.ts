import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  public isAuthorised() {
    return true;
  }
}

// This service will communicate directly with an API or service directly and authenticate the user
// For each path they use
// Here, we created a public method inside the export class to be inherited from 