import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  planesList: Array <any>=[]

  constructor(private planesService: PlanesService) {
    planesService.getList('https://citenik-nodocker.azurewebsites.net/api/planes').subscribe((res:any)=>{
     
     this.planesList=res
      console.table(this.planesList)
    })
   }



  ngOnInit(): void {

  }

}

