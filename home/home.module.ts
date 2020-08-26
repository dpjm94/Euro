import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { HsScreenModule } from '../hs-screen/hs-screen.module';
import { SiteScreenModule } from '../site-screen/site-screen.module';

@NgModule({
  declarations: [HomePage],
  imports: [
    HsScreenModule,
    SiteScreenModule,
    IonicPageModule.forChild(HomePage)
  ]
})
export class HomePageModule { }