import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { GetDataService } from 'src/app/admin/get-data.service';
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
  pages = [];
  

  constructor(private admobFree: AdMobFree,public platform: Platform, private router: Router, public storage: GetDataService ,
    private nativePageTransitions: NativePageTransitions
    ) {}


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

  }
  ionViewWillLeave() {


   
   }
}
