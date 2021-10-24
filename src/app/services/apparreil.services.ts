export class AppareilService {
    appareils =[
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

    switchOnAll() {
        for(let appareil of this.appareils){
            appareil.status='allumé';
        }
    }

    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status='éteint';
        }
    }

    switcOnOne(i:number){
        this.appareils[i].status==='allumé';
    }

    switcOffOne(i:number){
        this.appareils[i].status==='éteint';
    }

    getAppareilById(id: number) {
      const appareil = this.appareils.find(
        (s) => {
          return s.id === id;
        }
      );
      return appareil;
  }


}