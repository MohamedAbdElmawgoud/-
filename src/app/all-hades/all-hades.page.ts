import { Component, OnInit, ChangeDetectorRef, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService, Singelton } from 'src/app/admin/get-data.service';
import { pages } from '../pages';
import { Platform } from "@ionic/angular";
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { IonInfiniteScroll } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-all-hades',
  templateUrl: './all-hades.page.html',
  styleUrls: ['./all-hades.page.scss'],
})
export class AllHadesPage implements OnInit {
  type: any;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  page = 1

  Temp: any = [];
  hadeses: any = [];
  allHadeses: any = [];

  hades;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public storage: GetDataService,
    private cdr: ChangeDetectorRef,
    protected getDataService: GetDataService,
    private admobFree: AdMobFree,
    public platform: Platform,
    private nativePageTransitions: NativePageTransitions

  ) { }

  ngOnInit() {
    this.route
      .paramMap
      .subscribe(async  data => {
        this.hades = data.get('hades');
        this.cdr.detectChanges()
        this.getDataService.configUrl = pages[this.hades][0]
        let res = await this.getDataService.getConfigResponse().toPromise();
        this.allHadeses = res.body;
        this.type = res.url
        this.hadeses = [...this.hadeses, ...this.allHadeses.splice(0, 100)]
       this.storage.saveHades(this.allHadeses,this.type); // b3t kol al ahades
       console.log(res);

      });


  }
  loadData(e) {
    if ((e.detail.scrollTop / this.hadeses.length) / this.hadeses.length * 2 > this.page) {

      this.hadeses = [...this.hadeses, ...this.allHadeses.splice(0, 50)]


      this.page++;

    }




  }

  ionViewWillEnter() {
    if (this.platform.is('cordova')) {
      const bannerConfig: AdMobFreeBannerConfig = {
        id: 'ca-app-pub-7155090574313106/5706569080',
        // for the sake of this example we will just use the test config
        isTesting: false,
        autoShow: true,
      };
      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare().then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
        .catch(e => console.log(e));

    }
  }


  toggleInfiniteScroll() {

  }








  gethades(text: string) {

    this.router.navigate(['view-hades', { text: text }]);


  }
  ionViewWillLeave() {

    let options: NativeTransitionOptions = {
       direction: 'up',
       duration: 500,
       slowdownfactor: 3,
       slidePixels: 20,
       iosdelay: 100,
       androiddelay: 150,
       fixedPixelsTop: 0,
       fixedPixelsBottom: 60
      }
   
    this.nativePageTransitions.slide(options)
      .then()
      .catch();
   
   }

}
