import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  users = [
    {
      userName: "mauro",
      password: "final2020"
    },
    {
      userName: "julian",
      password: "final2020"
    }
  ]

  constructor() { }

  logIn(userName: string, password: string) {
    for (let user of this.users) {
      if (userName === user.userName && password === user.password) {
        this.isLoggedIn = true;
        return this.isLoggedIn;
      }
    }
    return this.isLoggedIn;
  }

}
