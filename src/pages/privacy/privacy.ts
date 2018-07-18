import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServerService } from '../server.service';

/**
 * Generated class for the PrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html',
})
export class PrivacyPage {
  privacy_policy: any;
  data: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public serverService: ServerService
  ) {
  }

  ionViewDidLoad() {
    this.serverService.getInfo().subscribe(
      response => {
        console.log(response.json().data)
        this.data = response.json().data;
        this.privacy_policy = response.json().data[0].privacy_policy;

      }, error => {
        console.log(error)
      }
    )
  }

}
