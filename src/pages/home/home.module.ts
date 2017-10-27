import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { IonicApp, IonicModule, DeepLinkConfig } from 'ionic-angular';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],

  entryComponents: [
    HomePage
  ]
})
export class HomePageModule {}




