import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-hades',
  templateUrl: './view-hades.page.html',
  styleUrls: ['./view-hades.page.scss'],
})
export class ViewHadesPage implements OnInit {
  Temp: any=[];
  hadeses: any=[];
  hades: any =[];

  constructor(private router: Router, private route: ActivatedRoute,) { }

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
    }
      console.log(this.Temp);
  }

}
