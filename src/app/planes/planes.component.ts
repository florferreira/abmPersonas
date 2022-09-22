import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlanesService } from '../services/planes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit, OnDestroy {
  todosplanes:any;
  planElegido:any;
  private subs:Subscription;

  planesList: Array <any>=[]

  constructor(public planesService: PlanesService) {
    this.subs=new Subscription()
    
  }



  ngOnInit(): void {
    this.subs.add(
      this.planesService.getList().subscribe({
        next:(result)=>{
          this.planesService.planesList=result
        },
        error:()=>{
          console.log(`Error al obtener el listado de planes`)
        }
      })
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}

