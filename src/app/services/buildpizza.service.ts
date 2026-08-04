import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { build } from '../buildpizza/buildpizza.component';
@Injectable({
  providedIn: 'root'
})
export class BuildpizzaService {

  constructor(private httpclient:HttpClient) {}
  pizzabuild():Observable<build[]>{
    return this.httpclient.get<build[]>('assets/data/ingredients.json');
  }
}
