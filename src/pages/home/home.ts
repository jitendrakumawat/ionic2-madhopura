import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { DashboardPage } from '../dashboard/dashboard';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

 createAccount() {
   this.navCtrl.push(RegistrationPage);
 }
 login() {
   this.navCtrl.setRoot(DashboardPage);
 }
}
