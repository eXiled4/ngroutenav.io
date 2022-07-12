import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramId => console.log(paramId));
  }

}

// import { ActivatedRoute } from '@angular/router'; was added
// Just like HttpClientModule to facilitate RESTful requests - we assign the word route in line 11
// to inherit the functions of the imported ActivatedRoute - unlike HttpClientModule,
// it was already installed upon creation of ng app (the RouterModule)
// Params: A collection of matrix and query URL parameters.
      // type Params = {
      //   [key: string]: any;
      // };
// 
