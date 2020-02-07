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

  constructor(private localNotifications: LocalNotifications, private router: Router, public storage: GetDataService) {

    const had = new Singelton();
    this.hades = had.saveHades();
    this.tempHades = this.hades;
  }

  // this.localNotifications.schedule({
  //   id: 1,
  //   text: 'Single ILocalNotification',
  //   sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
  //   data: { secret: key }
  // });

  getHades(type) {
 
      this.router.navigate(['all-hades', { hades: type }]);

  }


  ngOnInit() {
    this.pages = Object.keys(pages)


  }
}
