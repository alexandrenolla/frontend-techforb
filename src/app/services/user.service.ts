import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(private httpClient: HttpClient) { }

  getBalance(userId: number) {
    return this.httpClient.get<User>(`${environment.dataBaseUrl}/user/${userId}`)
  }


}
