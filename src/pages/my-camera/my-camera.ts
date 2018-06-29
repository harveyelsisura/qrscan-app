import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the MyCameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-camera',
  templateUrl: 'my-camera.html',
})
export class MyCameraPage {
  @ViewChild('one') d1:ElementRef;

  myPhoto: any;
  anError: any;
  image: any;
  scannedCode = null;
  selectedSection = 'tabButtonOne';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public camera: Camera,
    public menuCtrl: MenuController,
    private barcodeScanner: BarcodeScanner,
  ) {
    this.menuCtrl.swipeEnable(true)
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyCameraPage');
  }
  options: any;

  scanCode() {
    this.options = {
      prompt: 'Position the device above the barcode and wait for automatic scanning'
    }
    this.barcodeScanner.scan(this.options).then(barcodeData => {
      this.scannedCode = barcodeData.text.replace("SMSTO", "To").replace(/;/g, "\n").replace(/:/g, ": ");
    }, (err) => {
      this.anError = err;
      console.log(err);
    });
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.myPhoto = imageData;

    }, (err) => {
      this.anError = err;
      console.log(err)
    });

  }

}
