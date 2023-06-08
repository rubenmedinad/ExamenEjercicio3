import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autobus } from './Modelos/autobus.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutobusesService {

  constructor(private http:HttpClient) {

   }

   getAutobuses(): Observable<Autobus[]> {
    return this.http.get<Autobus[]>('http://localhost:8080/autobuses/all');
  }


    getAutobus(matricula:string):Observable<any>{
      return this.http.get('http://localhost:8080/autobuses/'+matricula);
    }
}
