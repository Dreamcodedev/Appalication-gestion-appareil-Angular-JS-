import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Appareil2Component } from './appareil2/appareil2.component';
import { AppareilService } from './services/apparreil.services';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {AuthificationService} from './services/auth.services';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.services';


const appRoutes :Routes = [
  { path :'appareil',canActivate: [AuthGuard], component : AppareilViewComponent},
  {path :'appareil/+id',canActivate: [AuthGuard], component : SingleAppareilComponent },
  {path : 'auth', component: AuthComponent},
  {path : '', component : AppareilViewComponent},
  {path : 'not-found', component : FourOhFourComponent},
  {path :  '**', redirectTo :'not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    Appareil2Component,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),


  ],
  providers: [
    AppareilService,
    AuthificationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
