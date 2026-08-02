import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }
  getPizza(): Observable<any[]> {
    return this.httpClient.get<any[]>('assets/data/pizza.json');

}
}
