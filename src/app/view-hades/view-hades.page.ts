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
   this.route
      .paramMap
      .subscribe(data => {
        this.hadeses = data.get('text');
      });

      console.log(this.Temp);
  }

}
