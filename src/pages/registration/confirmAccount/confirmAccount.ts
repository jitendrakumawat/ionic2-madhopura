import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../home/home';
@Component({
  selector: 'confirm-home',
  templateUrl: 'confirmAccount.html'
})
export class ConfirmAccountPage {
 showOTPCard:boolean = true;
  constructor(public navCtrl: NavController) {

  }
sendOTP() {
   console.log('message');
   this.showOTPCard = false;
}
setPassword(){
  this.navCtrl.push(HomePage);
}
}
