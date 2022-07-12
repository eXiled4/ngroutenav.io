import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', component: FirstComponent, pathMatch: 'full' },
  { path: 'rabble', component: FirstComponent },
  { path: 'ribble/:id', component: SecondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// To configure routing, search for this file app-routig.module.ts
// in line 4 - the const routes: Routes = [];
// Syntax as follows; - this syntax is a configuration object - defines one path in your application
// { path: '', component: FirstComponent }
// path - extension to URL, inside single quotes is the location and extension ofter default URL eg localhost4200
// next, state the component to be viewed
// pathMatch- requires user to enter the exact path to prevent error message

// Another component named 'second' was created - where in the path - /:id was chained to end of path -
// allow user to view each object and value based on their id
// Continue to second component tx file ...

// NOTE - in above eg, MUST enter the ID or else, using only 'ribble as path WILL NOT WORK