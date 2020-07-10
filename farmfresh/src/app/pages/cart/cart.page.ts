import { Component, OnInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage  {

  speakers: any[] = [];

  constructor(
    public confData: ConferenceData,
    public router: Router) {

  }

  checkout(){
    this.router.navigateByUrl('../../app/pages/chekout');
  }
  remove( index){

    this.speakers.splice(index, 1);
  }

  incrementQty(index:number){
    this.speakers[index].qty += 1;
    console.log(this.speakers[index].qty);
    }
  decrementQty(index:number){
    /*. if item passed then item.qty. */
      if(this.speakers[index].qty-1 < 1){
        this.speakers[index].qty = 0;
        console.log('item_1-> ' + this.speakers[index].qty)
      }
      else{
        this.speakers[index].qty -= 1;
        console.log('item_2-> ' + index +  '  '+this.speakers[index].qty);
      }
      }

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  ngOnInit() {
  }

}
