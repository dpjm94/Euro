import { Component} from '@angular/core';
import { NavController, Platform, IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,  
    private plt: Platform) {

  }

  ionViewWillLeave() {
    this.plt.registerBackButtonAction(() => {
        this.plt.exitApp();
    });
}

  goToSiteForm(){
    this.navCtrl.push('SiteScreenPage');
  }

  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

  goToHSPage(){
    this.navCtrl.push('HsScreenPage');
  }
}
