import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<User[]>(`${environment.dataBaseUrl}/user`)
  }

  postUser(requestBody: User) {
    return this.httpClient.post(`${environment.dataBaseUrl}/user`, requestBody)
  }

  loggedCheck(){
    let isLoggedIn = localStorage.getItem('isLoggedIn') 
    if (isLoggedIn === null) {
      isLoggedIn = "false"
      return false
    }
    else {
      return true
    }
  }
}
