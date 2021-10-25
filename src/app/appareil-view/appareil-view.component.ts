import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/apparreil.services';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit , OnDestroy{
  isAuth=false;
  appareils :any [''];
  appareilsSubscription : Subscription | undefined;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  
constructor( private appareilService: AppareilService) {
  setTimeout(
    () => {
      this.isAuth = true;
    },4000
    );
}

ngOnInit(){
    this.appareilsSubscription = this.appareilService.appareilsSubject.subscribe(
    (appareils:any[]) => {
    this.appareils=appareils;
  });
  this.appareilService.emitAppareilSubject();
  
}

ngOnDestroy(){
  this.appareilsSubscription?.unsubscribe();
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
