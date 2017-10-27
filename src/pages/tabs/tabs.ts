import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop';
import { MyPage } from '../my/my';
import {IndexPage} from "../index/index";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // tab1Root = IndexPage;
  tab1Root = ContactPage;
  tab2Root = AboutPage;
  tab3Root = HomePage;
  tab4Root = ShopPage;
  tab5Root = MyPage;

  constructor() {

  }
}