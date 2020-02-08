import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { GetDataService ,Singelton } from 'src/app/admin/get-data.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  After_1_hour: any;

  tempHades: any=[];
hadeses: any = [];
  hades: any = [];
  oneHourLater = new Date();
  

  constructor(private localNotifications: LocalNotifications,private router :Router , public storage: GetDataService ) {

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
    title:'Reminder',
    text: "Reminder you about a thing",
    firstAt: this.After_1_hour,
    every: "hour" // "minute", "hour", "week", "month", "year"
  });
 
}
  getHades(type) {
    this.storage.getAllHades(type, this.tempHades).then((n) => {
      this.hades = n;
      // console.log(this.hades);
      let route = this.router.config.find(r => r.path === 'all-hades');
      route.data = this.hades;
      // console.log(this.tempHades);
      this.router.navigate(['all-hades', { hades: this.tempHades }]);
      return this.hades;
    });
  }


  saveHades(title, content, type) {
    let data = { tit: title, con: content, ta: type };
    this.hadeses.push(data);
    
    this.storage.saveHades(data.tit, data.con, data.ta);
  }
  ngOnInit() {
    this.notification();

    this.saveHades(this.hades[0].tit, this.hades[0].con, this.hades[0].ta);
  
  }
}
