import { Component, OnInit, ChangeDetectorRef, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from 'src/app/admin/get-data.service';
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
        
        let res = await this.getDataService.getData(pages[this.hades][0]);
        this.allHadeses = res
        this.hadeses = [...this.hadeses, ...this.allHadeses.splice(0, 100)]

      });


  }
  loadData(e) {

    if (((e.detail.scrollTop + 500) / 110) / this.hadeses.length > 1) {

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

  }

}
