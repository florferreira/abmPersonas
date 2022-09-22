import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  planesList: Array <any>=[]
  
  constructor(private http:HttpClient) { 
    this.planesList=new Array<any>()

  }
  

 
  public getList(url:string){ 
    return this.http.get(url)
  }
}
