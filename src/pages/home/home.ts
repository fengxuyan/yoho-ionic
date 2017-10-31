import { Component ,ViewChild } from '@angular/core';
import { NavController ,Nav } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';


import {ContactPage} from "../contact/contact";
import {MyPage} from "../my/my";
import {ShopPage} from "../shop/shop";


/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage({
  name: 'home-page',
  segment:'home/:id',
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav :Nav;

  rootPage:any;
  pages:Array<{title:string,component:any}>;
  constructor(public navCtrl: NavController) {
    // menu.enable(true);
    this.pages=[


      {title:'MyPage',component:MyPage},

      {title:'ShopPage',component:ShopPage},

      {title:'ContactPage',component:ContactPage}
      ];
  }
  openPage(page){
    this.nav.setRoot(page.component)
  }

  goToMyPage()
  {

    this.navCtrl.push('new-product')

  }


}
