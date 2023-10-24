import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Task } from '../shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  getTasks(userId: number) {
    return this.httpClient.get<Task[]>(`${environment.dataBaseUrl}/task/user/${userId}`)
  }

  postTaskDeposit(requestBody: Task) {
    return this.httpClient.post(`${environment.dataBaseUrl}/task/deposit`, requestBody)
  }

  postTaskTransfer(requestBody: Task) {
    return this.httpClient.post(`${environment.dataBaseUrl}/task/transfer`, requestBody)
  }

  postTaskWithdraw(requestBody: Task) {
    return this.httpClient.post(`${environment.dataBaseUrl}/task/withdraw`, requestBody)
  }
}
