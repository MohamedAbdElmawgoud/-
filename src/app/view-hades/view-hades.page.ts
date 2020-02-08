import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from "@ionic/angular";
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-view-hades',
  templateUrl: './view-hades.page.html',
  styleUrls: ['./view-hades.page.scss'],
})
export class ViewHadesPage implements OnInit {
  Temp: any=[];
  hadeses: any=[];
  hades: any =[];

  constructor(private admobFree: AdMobFree,public platform: Platform,private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
   this.route
      .paramMap
      .subscribe(data => {
        this.hadeses = data.get('text');
      });

      console.log(this.Temp);
  }
  ionViewWillEnter() {
    if(this.platform.is('cordova')){
    const bannerConfig: AdMobFreeBannerConfig = {
      id :'ca-app-pub-7155090574313106/9002622742' ,
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
}
