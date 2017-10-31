import { Component ,ViewChild} from '@angular/core';
import { NavController , IonicPage , Nav} from 'ionic-angular';
import {MyPage} from "../my/my";
import {ShopPage} from "../shop/shop";

@IonicPage({
  name: 'contact-page',
  segment: 'contact/:id'
})

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  tab_list: string ="new";

  goTOHomePage(detailInfo) {
    console.log('bye');
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push('my-index', {

    },{})
  }

  @ViewChild(Nav) nav :Nav;

  rootPage:any=ContactPage;
  pages:Array<{title:string,component:any}>;
  constructor(public navCtrl: NavController) {
    // menu.enable(true);
    // this.pages=[
    //   {title:'HomePage',component:ContactPage},
    //
    //   {title:'MyPage',component:MyPage},
    //
    //   {title:'ShopPage',component:ShopPage},
    //
    //   {title:'ContactPage',component:ContactPage}
    // ];
  }
  // openPage(page){
  //
  //
  //   this.nav.setRoot(page.component)
  // }


}
