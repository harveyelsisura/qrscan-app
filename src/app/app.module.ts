import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Camera } from '@ionic-native/camera';
import { MyCameraPage } from '../pages/my-camera/my-camera';

// QR SCANNER
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AboutUsPage } from '../pages/about-us/about-us';
import { SettingsPage } from '../pages/settings/settings';
import { FaqPage } from '../pages/faq/faq';
import { PrivacyPage } from '../pages/privacy/privacy';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyCameraPage,
    AboutUsPage,
    SettingsPage,
    FaqPage,
    PrivacyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyCameraPage,
    AboutUsPage,
    SettingsPage,
    FaqPage,
    PrivacyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner
  ]
})
export class AppModule { }
