import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService ,Singelton } from 'src/app/admin/get-data.service';

@Component({
  selector: 'app-all-hades',
  templateUrl: './all-hades.page.html',
  styleUrls: ['./all-hades.page.scss'],
})
export class AllHadesPage implements OnInit {
  Temp: any= [];
  hadeses: any = [];
  hades: any = [];

  constructor(private router: Router, private route: ActivatedRoute, public storage: GetDataService) { }

  ngOnInit() {
    this.hades = this.route
      .data
      .subscribe(v => {
        this.hadeses = v;
      });
    let count: any;
    let temp = Object.keys(this.hadeses);
    for (count of temp) {
      this.Temp.push(this.hadeses[count]);
      this.Temp = this.Temp[0];
    }
    count = this.Temp.tit;
   // console.log(this.Temp);
  }
  
  gethades(title: string) {
    this.storage.gethades(title).then((n) => {
      this.hades = n;
      // console.log(this.hades);
      let route = this.router.config.find(r => r.path === 'view-hades');
      route.data = this.hades;
      this.router.navigate(['view-hades', { note: this.hades }]);
     // console.log(this.hades);
      return this.hades;
    });
    // console.log(this.hades);

  }
}
