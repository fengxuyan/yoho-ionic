import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { App, MenuController, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: 'home-page',
  segment:'home/:id',
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(app: App, menu: MenuController, public navCtrl: NavController, public navParams: NavParams) {
    menu.enable(true);
  }
  goToMyPage(){
    this.navCtrl.push('new-product', {

    },{})
  }

}
