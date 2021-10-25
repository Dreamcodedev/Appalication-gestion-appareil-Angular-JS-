import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppareilService } from './services/apparreil.services';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy { 

  secondes : number | undefined;
  counterSubscription: Subscription | undefined;

  constructor() {}

  ngOnInit (){
    const counter = Observable.interval(1000);

    this.counterSubscription = counter.subscribe( 
      (value) => {
        this.secondes = value;
      },

      (error) => {
        console.log('il y a une erreur ' +error);
      },

      ()=> {
        console.log('message complet');
      }
    );
  }

  ngOnDestroy(){
    this.counterSubscription!.unsubscribe();
  }
  



}
