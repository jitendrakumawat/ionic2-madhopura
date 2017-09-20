import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'gallary-home',
  templateUrl: 'gallary.html'
})
export class GallaryPage {
  year:number = 2015 ;
  constructor(public navCtrl: NavController) {

  }

}
