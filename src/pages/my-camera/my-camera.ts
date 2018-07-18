import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ServerService } from '../server.service';
import * as moment from 'moment';


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
  @ViewChild('one') d1: ElementRef;

  myPhoto: any;
  anError: any;
  image: any;
  scannedCode = null;
  selectedSection = 'tabButtonOne';
  data: any;
  company: any;
  location: any;
  date_issued: any;
  date_expiry: any;
  status: any;
  error: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public camera: Camera,
    public menuCtrl: MenuController,
    private barcodeScanner: BarcodeScanner,
    public serverService: ServerService
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
      this.serverService.getQR(this.scannedCode).subscribe(
        response => {
          this.data = response.json().data;
          console.log(this.data)
          if (!this.data) {
            this.company = this.data.company;
            this.location = this.data.location;
            this.status = this.data.status;
            this.date_expiry = moment(new Date(this.data.date_info.date_expiry)).format('ll');
          } else {
            this.company = '';
            this.location = '';
            this.status = '';
            this.date_expiry = '';
          }
        }, error => {
          this.error = error;
          console.log(this.error)
        }
      )
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
