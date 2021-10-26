import { Subject } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService {

   appareilsSubject = new Subject<any[]>();
   private appareils =[
        { id :1,
          name:'Télévision',
          status : 'éteint'
    
        },
        { id :2,
          name:'Machine à laver',
          status:'éteint'
        },
        { id: 3,
          name:'Téléphone',
          status:'allumé'
        }
      ];

      constructor(private httpclient : HttpClient){}

    emitAppareilSubject(){
      this.appareilsSubject.next(this.appareils.slice());
    }

    switchOnAll() {
        for(let appareil of this.appareils){
            appareil.status='allumé';
        }
        this.emitAppareilSubject();
    }

    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status='éteint';
        }
        this.emitAppareilSubject();
    }

    switcOnOne(i:number){
        this.appareils[i].status==='allumé';
        this.emitAppareilSubject();
    }

    switcOffOne(i:number){
        this.appareils[i].status==='éteint';
        this.emitAppareilSubject();
    }

    getAppareilById(id : number) {
      const appareil = this.appareils.find(
        (s) => {
          return s.id === id;
        }
      );
      this.emitAppareilSubject();
      return appareil;
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
}

saveAppareilsToServer() {
  this.httpclient
    .put('https://clientangular-demo-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.appareils)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

getAppareilsFromServer() {
  this.httpclient
    .get<any[]>('https://clientangular-demo-default-rtdb.europe-west1.firebasedatabase.app/appareils.json')
    .subscribe(
      (response) => {
        this.appareils = response;
        this.emitAppareilSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

}