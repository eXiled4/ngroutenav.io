import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  { path: '', component: FirstComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// To configure routing, search for this file app-routig.module.ts
// in line 4 - the const routes: Routes = [];
// Syntax as follows;
// { path: '', component: FirstComponent }
// path - extension to URL, inside single quotes is the location and extension ofter default URL eg localhost4200
// next, state the component to be viewed
// pathMatch- requires user to enter the exact path to prevent error message