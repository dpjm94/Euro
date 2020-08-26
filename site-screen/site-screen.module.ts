import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteScreenPage } from './site-screen';

@NgModule({
  declarations: [SiteScreenPage],
  imports: [
    IonicPageModule.forChild(SiteScreenPage)
  ]
})
export class SiteScreenModule { }