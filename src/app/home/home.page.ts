import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { GetDataService, Singelton } from 'src/app/admin/get-data.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { pages } from '../pages';

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
  

  constructor(private localNotifications: LocalNotifications, private router: Router, public storage: GetDataService) {

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
    every: "hour" // "minute", "hour", "week", "month", "year
    
  });
 
}
  getHades(type) {
 
      this.router.navigate(['all-hades', { hades: type }]);

  }


  ngOnInit() {
    this.pages = Object.keys(pages)
    this.notification();

  }
}
