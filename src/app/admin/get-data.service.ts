import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  hades: any = [];

  constructor(public storage: Storage) { }

saveHades(title, content, type) {
    
        const data = { tit: title, con: content, ta: type };
        // console.log(data);
        this.hades.push(data);
        // console.log(this.hades);
        // if you want push new data change the statement 
        if (this.storage == null) {
          this.storage.set('Hades', this.hades);
        }
        return this.hades;
      }

      async getAllHades(type, hades) {
    
        let count = 0;
        let temp = hades;
        let temp2: any = [];
        temp.forEach(element => {
          if (temp[count].ta === type) {
            temp2.push(temp[count]);
            // console.log('hades ' + temp[count].tit);
          }
          count++;
        });
        return temp2;
    
      }
      gethades(title: string) {
        let count = 0;
        let hade: any = [];
        let temp;
        return this.storage.get('Hades').then((hades) => {
          this.hades.forEach(element => {
    
            hade.push(element);
            //  console.log(title);
    
            if (title === hade[count].tit) {
              temp = hade[count];
    
            }
            count += 1;
    
          });
          // console.log(temp);
          return temp;
        });
        
          }

}
export class Singelton {
  private static instance: Singelton;
  hades: any = [];
  public static getInstance(): Singelton {
    if (!Singelton.instance) {
      Singelton.instance = new Singelton();
    }
    return Singelton.instance;
  }

  saveHades(){
      let data = {
        tit: 'ابو هريره'
        // data = { tit: 'title', con: 'aaacontent', ta: 'horror' };
        // this.hades.push(data);
        // tslint:disable-next-line:max-line-length
         ,con: `عن أبي هريرة -رضي الله عنه- قال: إنَّ رجلًا قال للنبيِّ -صلَّى اللهُ عليه وسلَّم-: أَوصِني، قال: لا تَغضَبْ، فردَّد مِرارًا، قال: لا تَغضَبْ
         
         `
        , ta: 'مسلم'
      };
      this.hades.push(data);
      return this.hades;
  }
}