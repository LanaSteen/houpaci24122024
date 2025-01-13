import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscriber } from '../../Models/subscriber.model';  

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  private apiUrl = 'https://67850c611ec630ca33a6f9d4.mockapi.io/api/subscriber';  

  constructor(private http: HttpClient) {}

  getSubscribers(): Observable<Subscriber[]> {
    return this.http.get<Subscriber[]>(this.apiUrl);
  }

  addSubscriber(email: string): Observable<Subscriber> {
    const newSubscriber = { email };
    return this.http.post<Subscriber>(this.apiUrl, newSubscriber);
  }

//   updateSubscriber(subscriber: Subscriber): Observable<Subscriber> {
//     return this.http.put<Subscriber>(`${this.apiUrl}/${subscriber.id}`, subscriber);
//   }


  updateSubscriber(subscriber: Subscriber): Observable<Subscriber> {
    const url = `${this.apiUrl}/${subscriber.id}`;
    return this.http.put<Subscriber>(url, subscriber);
  }

  deleteSubscriber(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}