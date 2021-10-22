export class AppareilService {
    appareils =[
        {
          name:'Télévision',
          status : 'éteint'
    
        },
        {
          name:'Machine à laver',
          status:'éteint'
        },
        {
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

}