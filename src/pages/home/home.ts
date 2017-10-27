import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {ContactPage} from "../contact/contact";
/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { App, MenuController } from 'ionic-angular';

@IonicPage({
  name: 'detail-page',
  segment:'detail/:id',
  // defaultHistory: ['/']
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /*constructor(public navCtrl: NavController) {

  }*/

  constructor(app: App, menu: MenuController) {
    menu.enable(true);
  }

}
