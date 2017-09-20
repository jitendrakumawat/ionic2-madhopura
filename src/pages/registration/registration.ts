import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmAccountPage } from './confirmAccount/confirmAccount';
@Component({
  selector: 'registration-home',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController) {

  }
sendOTP() {
   this.navCtrl.push(ConfirmAccountPage);
}
}
