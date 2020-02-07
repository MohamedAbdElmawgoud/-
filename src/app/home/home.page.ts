import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { GetDataService ,Singelton } from 'src/app/admin/get-data.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  tempHades: any=[];
hadeses: any = [];
  hades: any = [];

  constructor(private localNotifications: LocalNotifications,private router :Router , public storage: GetDataService ) {

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
    // console.log(this.stories);
    this.storage.saveHades(data.tit, data.con, data.ta);
  }
  ngOnInit() {
    // horror

    this.saveHades(this.hades[0].tit, this.hades[0].con, this.hades[0].ta);
  
  }
}
