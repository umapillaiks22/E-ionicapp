import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  speakers: any[] = [];
  showSearchbar: boolean;

  constructor(public confData: ConferenceData) {


  }
  incrementQty(index:number){
    this.speakers[index].qty += 1;
    console.log(this.speakers[index].qty + 1);
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
}
