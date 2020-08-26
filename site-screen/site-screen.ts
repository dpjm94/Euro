import { Component } from '@angular/core';
import { NavController, NavParams, Platform, IonicPage, LoadingController} from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-site-screen',
  templateUrl: 'site-screen.html',
})
export class SiteScreenPage {

  constructor(public navCtrl: NavController, 
    private plt: Platform, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {
  }

  ionViewCanEnter() {
    this.plt.registerBackButtonAction(() => {
        this.navCtrl.push(HomePage);
    });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SiteScreenPage');
  }

  goToCVI(){
    this.navCtrl.push('CviFormPage');

    const loader = this.loadingCtrl.create({
      content: "Opening CVI Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 
  }


  goToRFI(){
    this.navCtrl.push('RfiFormPage');

    const loader = this.loadingCtrl.create({
      content: "Opening RFI Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 


  }

  goToCart(){
    this.navCtrl.push('CartPage');

    const loader = this.loadingCtrl.create({
      content: "Opening Cartaway Record Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 
  }

  goToMaterial(){
    this.navCtrl.push('MatPage');

    const loader = this.loadingCtrl.create({
      content: "Opening Material Received Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 
  }

  goToMuck(){
    this.navCtrl.push('MuckPage');

    const loader = this.loadingCtrl.create({
      content: "Opening Muck Away Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 
  }


  goToPlant(){
    this.navCtrl.push('PlantPage');

    const loader = this.loadingCtrl.create({
      content: "Opening Plant Return Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 

  
  }

  goToHandOver(){
    this.navCtrl.push('HandoverPage');

    const loader = this.loadingCtrl.create({
      content: "Opening HandOver Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 

  
  }

  goToDrainage(){
    this.navCtrl.push('DrainagePage');

    const loader = this.loadingCtrl.create({
      content: "Opening Drainage Test Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 

  
  }

  goToFoundation(){
    this.navCtrl.push('FoundationPage');

    const loader = this.loadingCtrl.create({
      content: "Opening Foundation Checklist Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 

  
  }

  goToPlantReq(){
    this.navCtrl.push('RequisitionPage');

    const loader = this.loadingCtrl.create({
      content: "Opening Plant Requistion Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 

  
  }


  goToMaterialReq(){
    this.navCtrl.push('MatReqPage');

    const loader = this.loadingCtrl.create({
      content: "Opening Material Requistion Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 

  
  }

  goToPaving(){
    this.navCtrl.push('PavingPage');

    const loader = this.loadingCtrl.create({
      content: "Opening Paving Checksheet Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 

  
  }


  goToPre(){
    this.navCtrl.push('PrePourPage');

    const loader = this.loadingCtrl.create({
      content: "Opening Pre-Pour Checksheet Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 

  
  }

  goToTime(){
    this.navCtrl.push('TimePage');

    const loader = this.loadingCtrl.create({
      content: "Opening Time sheet Form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 

  
  }

  goToDay(){
    this.navCtrl.push('DayworkPage');

    const loader = this.loadingCtrl.create({
      content: "Opening Daywork Record form...",
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 2000); 

  
  }

}
