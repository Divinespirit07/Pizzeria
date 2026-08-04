import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from '../order/order.component';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }
  getPizza(): Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>('assets/data/pizza.json');

}
}
