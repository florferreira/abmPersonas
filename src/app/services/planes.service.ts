import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
    planesList: Array <any>=[]
    uri: string= 'https://citenik-nodocker.azurewebsites.net/api/planes'

  constructor(public http:HttpClient) { 
    this.planesList=[]

  }
  

  getList():Observable<any>{ 
    return this.http.get(this.uri)
  }

  

}
