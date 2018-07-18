import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyCameraPage } from '../my-camera/my-camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ServerService } from '../server.service';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  scannedCode = null;
  anError: any;
  data: any;
  version: any;
  faq: any;
  about: any;
  privacy_policy: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    public serverService: ServerService
  ) {
    // this.ionViewDidLoad()
  }

  ionViewDidLoad() {
    this.serverService.getInfo().subscribe(
      response => {
        console.log(response.json().data)
        this.data = response.json().data
        this.version = response.json().data[0].version;

      }, error => {
        console.log(error)
      }
    )
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
      this.anError = err;
      console.log(err);
    });
  }
  openPage() {
    this.navCtrl.setRoot(MyCameraPage)
  }
}
