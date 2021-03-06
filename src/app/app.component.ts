import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/apparreil.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  isAuth=false;
  appareils :any [''];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  
constructor( private appareilService: AppareilService){
  setTimeout(
    () => {
      this.isAuth = true;
    },4000
    );
}

ngOnInit(){
  this.appareils = this.appareilService.appareils;
}

onAllumer(){
  this.appareilService.switchOnAll();
}

onEteindre(){
  if(confirm('Êtes vous sûr de vouloir éteindre les appareils')){
    this.appareilService.switchOffAll();
  } 
}



}
