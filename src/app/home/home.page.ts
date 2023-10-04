import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  score = 0;

  constructor(
    private navCtrl: NavController,
  ) {}


  play() {
    this.navCtrl.navigateForward("/play");
  }
}
