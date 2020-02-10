import { Component, ViewChildren, QueryList, OnDestroy } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform, IonRouterOutlet, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { GetDataService } from './admin/get-data.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  backButtonSubscription: any;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
    private platform: Platform,
    public router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController,
    private localNotifications: LocalNotifications,
    private backgroundMode: BackgroundMode,
    private getDataService: GetDataService,
    private androidPermissions: AndroidPermissions


  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.backgroundMode.enable();
      this.askForPermissions()
      this.notification()
      this.localNotifications.on('click').subscribe(async (notification) => {
        let hades = await this.getDataService.randomHades()
        this.router.navigate(['view-hades', hades])

      })
    });
  }

  backButtonEvent() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (
          this.router.url === '/home'
        ) {
          this.presentAlertConfirm();
        }
      });
    });
  }
  askForPermissions() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.FOREGROUND_SERVICE).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.FOREGROUND_SERVICE)
    );
  }
  notification() {

    this.localNotifications.schedule({
      id: 1,
      text: "رسول الله يقول لك ...",
      lockscreen: true,
      data: {
        text: "test"
      },
      trigger: {
        every: ELocalNotificationTriggerUnit.HOUR,
        in: 1,
      },
      actions: []
    });

  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'هل تريد الخروج',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Exit',
          handler: () => {
            console.log('Confirm Okay');
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }


  // Called when view is left
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    // Unregister the custom back button action for this page
    this.backButtonSubscription.unsubscribe();
  }
}
