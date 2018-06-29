import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyCameraPage } from '../my-camera/my-camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {

  scannedCode = null;
  anError: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private barcodeScanner: BarcodeScanner) {
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
      this.anError = err;
      console.log(err);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

  openPage() {
    this.navCtrl.setRoot(MyCameraPage)
  }
}
