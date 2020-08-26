import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CviFormPage } from './cvi-form';
import { SignaturePadModule } from 'angular2-signaturepad';


@NgModule({
  declarations: [CviFormPage],
  imports: [
      SignaturePadModule,
    IonicPageModule.forChild(CviFormPage)
  ]
})
export class CviFormModule { }