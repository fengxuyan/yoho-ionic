import { Component , ViewChild, ViewChildren, QueryList ,ElementRef} from '@angular/core';
import { Platform , Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import {IndexPage } from '../pages/index/index'
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";

import { MenuController } from 'ionic-angular';

import * as $ from 'jquery';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  constructor(public  platform: Platform, public menuCtrl: MenuController, public statusBar: StatusBar, public splashScreen: SplashScreen) {


    if (2) {
      this.rootPage = IndexPage;
    }
    // this.rootPage = TabsPage;

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'BOYS', component: LoginPage },
      { title: 'Girls', component: LoginPage }
    ];

  }




  @ViewChildren('name')
  todoNames: QueryList<ElementRef>;

  @ViewChild('name')
  todoName: ElementRef;
  // ngAfterViewInit(){
  //   this.todoNames.forEach(
  //     e=>console.log(e._elementRef.nativeElement.innerText)
  //   );
  //   console.log(this.todoName._elementRef.nativeElement.innerText);
  // }

  rootPage: any = TabsPage;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;






  goToBoysPage(){
    this.menuCtrl.open('BOYS');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot('my-login');
  }

  show(e){
    alert(e.target.innerText)
  }



  // constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  //   platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     statusBar.styleDefault();
  //     splashScreen.hide();
  //   });
  // }
  //
  //

}
