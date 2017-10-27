import { Component } from '@angular/core';
import { NavController , IonicPage } from 'ionic-angular';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HomePage } from '../home/home'
@IonicPage({
  name: 'contact-page',
  segment: 'contact/:id'
})

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController) {}
  tab_list: string ="new";

  goTOHomePage(detailInfo) {
    console.log('bye');
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push('detail-page', {
      'id': detailInfo
    },{})
  }
}
