import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BuildpizzaService {

  constructor(private httpclient:HttpClient) {}
  pizzabuild():Observable<any[]>{
    return this.httpclient.get<any[]>('assets/data/ingredients.json');
  }
}
