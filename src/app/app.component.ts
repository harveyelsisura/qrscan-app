import { Component, ViewChild } from '@angular/core';
import { Platform, ModalController, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyCameraPage } from '../pages/my-camera/my-camera';
import { AboutUsPage } from '../pages/about-us/about-us';
import { SettingsPage } from '../pages/settings/settings';
import { FaqPage } from '../pages/faq/faq';
import { PrivacyPage } from '../pages/privacy/privacy';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = MyCameraPage;

  showSplash = true;
  pages: Array<{ title: string, component: any }>;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public modalCtrl: ModalController,
    public menu: MenuController,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      if (splashScreen) {
        setTimeout(() => {
          splashScreen.hide();
        }, 100);
      }
    });
    this.menu.swipeEnable(true)

  }

  openPage(page: any) {
    this.menu.close();
    if (page == 1) {
      this.nav.setRoot(AboutUsPage);
    } if (page == 2) {
      this.nav.setRoot(SettingsPage);
    } if (page == 3) {
      this.nav.setRoot(FaqPage);
    } if (page == 4) {
      this.nav.setRoot(PrivacyPage);
    }
  }

}


