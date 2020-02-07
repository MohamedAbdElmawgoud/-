import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService, Singelton } from 'src/app/admin/get-data.service';
import { pages } from '../pages';

@Component({
  selector: 'app-all-hades',
  templateUrl: './all-hades.page.html',
  styleUrls: ['./all-hades.page.scss'],
})
export class AllHadesPage implements OnInit {
  Temp: any = [];
  hadeses: any = [];
  hades;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public storage: GetDataService,
    private cdr: ChangeDetectorRef,
    protected getDataService: GetDataService
  ) { }

  ngOnInit() {
    this.route
      .paramMap
      .subscribe(async  data => {
        this.hades = data.get('hades');
        this.cdr.detectChanges()
        this.getDataService.configUrl = pages[this.hades][0]
        let res = await this.getDataService.getConfigResponse().toPromise();
        this.hadeses = res.body;
      });


  }
  gethades(text: string) {

      this.router.navigate(['view-hades', { text : text}]);


  }

}
