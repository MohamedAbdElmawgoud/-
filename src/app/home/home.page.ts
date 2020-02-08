import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { GetDataService, Singelton } from 'src/app/admin/get-data.service';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import { pages } from '../pages';
import { Platform } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tempHades: any = [];
  hadeses: any = [];
  hades: any = [];
  pages = []
  After_1_hour: any;


  oneHourLater = new Date();
  

  constructor(private admobFree: AdMobFree,public platform: Platform,private localNotifications: LocalNotifications, private router: Router, public storage: GetDataService) {

    const had = new Singelton();
    this.hades = had.saveHades();
    this.tempHades = this.hades;
    
  }
notification(){
  this.oneHourLater.setHours(this.oneHourLater.getHours() + 1)
  let today = new Date();
  today.setHours(1);
  today.setMinutes(0);
  today.setSeconds(0);
  this.After_1_hour = new Date(today);
  this.localNotifications.schedule({
    id: 1,
    text: "Reminder you about a thing",
    data : {},
    trigger : {
      every : ELocalNotificationTriggerUnit.HOUR,
      in : 1 ,
      firstAt : new Date()
    }
  });
 
}

ionViewWillEnter() {
  if(this.platform.is('cordova')){
  const bannerConfig: AdMobFreeBannerConfig = {
    id :'ca-app-pub-7155090574313106/2425799629' ,
    // for the sake of this example we will just use the test config
    isTesting: false,
    autoShow: true,
   };
   this.admobFree.banner.config(bannerConfig);
   
   this.admobFree.banner.prepare() .then(() => {
  // banner Ad is ready
  // if we set autoShow to false, then we will need to call the show method here
})
.catch(e => console.log(e));

  }
}
  getHades(type) {
 
      this.router.navigate(['all-hades', { hades: type }]);

  }


  ngOnInit() {
    this.pages = Object.keys(pages)
    this.notification();

  }
}
