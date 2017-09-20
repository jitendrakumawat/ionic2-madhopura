import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { TeamRegistrationPage } from '../teamRegistration/register';
import { GallaryPage } from '../gallary/gallary';
@Component({
  selector: 'dashboard-home',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController) {

  }
registerTeam() {
  this.navCtrl.push(TeamRegistrationPage);
}
goToGallary() {
  this.navCtrl.push(GallaryPage);
}

}
