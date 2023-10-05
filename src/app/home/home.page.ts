import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
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


	ngOnInit() {
    Preferences.get({key: 'score'}).then(getResult => {
      console.log('Successfully reading score');
      this.score = Number(getResult.value) || 0;
    }).catch(error => {
      console.log('Error reading score: ', error)
      this.score = 0;
    });
	}

  play() {
    this.navCtrl.navigateForward("/play");
  }
}
