import { Component ,ViewChild } from '@angular/core';
import { NavController ,Nav } from 'ionic-angular';

import {ContactPage} from "../contact/contact";
import {MyPage} from "../my/my";
import {ShopPage} from "../shop/shop";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild(Nav) nav :Nav;

  rootPage:any=ContactPage;
  pages:Array<{title:string,component:any}>;


  constructor(public navCtrl: NavController) {
    this.pages=[{title:'ContactPage',component:ContactPage},{title:'MyPage',component:MyPage}];

  }


  openPage(page){


    this.nav.setRoot(page.component)
  }

}


