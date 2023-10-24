import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Card } from '../shared/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) { }

  getCards(userId: number) {
    return this.httpClient.get<Card[]>(`${environment.dataBaseUrl}/card/user/${userId}`)
  }

  postCard(requestBody: Card) {
    return this.httpClient.post(`${environment.dataBaseUrl}/card`, requestBody)
  }
}
