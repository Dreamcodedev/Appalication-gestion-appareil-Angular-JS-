import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
    private users: User[] = [
        new User('Demba', 'Diop', 'wildidi@gmail.com', 'jus d\'orange', ['coder', 'boire du café'])
    ];

    constructor(private httpclient : HttpClient){}

     userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  saveUsersToServer() {
    this.httpclient
      .put('https://clientangular-demo-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.users)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
      this.emitUsers()
}

getUsersFromServer() {
  this.httpclient
    .get<any[]>('https://clientangular-demo-default-rtdb.europe-west1.firebasedatabase.app/appareils.json')
    .subscribe(
      (response) => {
        this.users = response;
        this.emitUsers();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

}