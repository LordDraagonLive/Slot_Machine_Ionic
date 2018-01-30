import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { AboutPage } from '../about/about';
import { GamePage } from '../game/game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openGame(){
    this.navCtrl.push(GamePage);
    
  }

}
