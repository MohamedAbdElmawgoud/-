import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { Config } from "@ionic/angular/dist";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  config: Config;
  configUrl: any; // The ConfigService fetches this file with a get() method on HttpClient.

  hades: any = [];
  urls = {
    "https://api.npoint.io/ae1334a31d62c7f9fa61": "malek",
    "https://api.npoint.io/66f908e1fcd0bae217c1": "Ahmed",
    "https://api.npoint.io/40ee131ca1c64b0b335c": "bo5ary",
    "https://api.npoint.io/4203f11d80f7dd414ded": "muslim",
    "https://api.npoint.io/b5883fdbe0187940cd46": "termazi",
    "https://api.npoint.io/df27514cf9a8cc1d59a8": "Dramy",
    "https://api.npoint.io/9c744b55c6e59c405a1b": "Dawwd",
    "https://api.npoint.io/c8b9d7ba4fed23180495": 'maga',
    "https://api.npoint.io/f333e4f964f783729dee": "abn_maga"
  }
  constructor(public storage: Storage, private http: HttpClient) { }



  async getData(url) {
    let type = this.urls[url];
    let data = await this.storage.get(type);
    if (data) {
      return data
    } else {
      let res = await this.http.get<Config>(
        this.configUrl, { observe: 'response' }).toPromise();
      await this.storage.set(type, res.body);
      return res.body
    }
  }







}
