import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slides = [
    
    {
      image: "assets/img/appicon.png",
    },
    {
      image: "assets/img/quote3.png",
   },
  
    {
       image: "assets/img/quote1.png",
    },
    {
       image: "assets/img/quote2.png",
    },
    
  
  ];
  
  constructor( public router: Router) { }
  cart() {
    this.router
      .navigateByUrl('/app/tabs/cart');
  }
  search() {
    this.router
      .navigateByUrl('/app/tabs/speakers');
  }
  ngOnInit() {
  }

}
