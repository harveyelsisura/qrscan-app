import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyCameraPage } from '../my-camera/my-camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ServerService } from '../server.service';

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
  faq: any;
  scannedCode = null;
  data: any;
  anError: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    public serverService: ServerService) {
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
    this.serverService.getInfo().subscribe(
      response => {
        console.log(response.json().data)
        this.data = response.json().data;
        this.faq = response.json().data[0].faq;

      }, error => {
        console.log(error)
      }
    )
  }

  openPage() {
    this.navCtrl.setRoot(MyCameraPage)
  }
}
