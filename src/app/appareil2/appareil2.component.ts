import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/apparreil.services';

@Component({
  selector: 'app-appareil2',
  templateUrl: './appareil2.component.html',
  styleUrls: ['./appareil2.component.scss']
})
export class Appareil2Component implements OnInit {

  @Input() appareilName = '';
  @Input() appareilStatus = '';
  @Input() index : number =1 ;

  

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus==='éteint'){
       return 'red';
    }else {
      return 'green';
    }
  }
   
  onSwitch(){
    if(this.appareilStatus==='allumé'){
      this.appareilService.switcOffOne(this.index);
    } else if (this.appareilStatus==='éteint'){
      this.appareilService.switcOnOne(this.index);
    }
  }
 

}
