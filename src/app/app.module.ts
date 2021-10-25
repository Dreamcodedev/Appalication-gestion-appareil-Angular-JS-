import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import {UserService} from './services/user.services';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';


const appRoutes :Routes = [
  { path :'appareil',canActivate: [AuthGuard], component : AppareilViewComponent},
  {path :'appareil/+id',canActivate: [AuthGuard], component : SingleAppareilComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
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
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [
    AppareilService,
    AuthificationService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
