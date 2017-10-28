import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop';
import { MyPage } from '../my/my';
import {IndexPage} from "../index/index";
import { App, MenuController, NavController, NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'tabs-page',
  segment:'tabs/:id',
})

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // tab1Root = IndexPage;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ShopPage;
  tab5Root = MyPage;
  constructor() {
  }
}
