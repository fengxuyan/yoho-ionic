import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({name:'my-index'})
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  items =['男生 BOYS','女生 GIRLS','潮童 KIDS' ,'创意生活 LIFESTYLE'];
  goToLoginPage(){
    // console.log('yels');
    this.navCtrl.push('my-login');
  }

  goToOtherPage() {
    // console.log('bye');
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push('home-page');
  }
  goToTop(){
  }
  goToRegisterPage(){
    console.log('yels');
    this.navCtrl.push('my-register');
  }

}
/*
  goToOtherPage() {
    console.log('bye');
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(ContactPage);
  }
 */
