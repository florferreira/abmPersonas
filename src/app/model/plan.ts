export class Plan {
    public id: number;
    public nombre: string;
    public tna: number;
    public duracionMinimaCuotas: number;
    public duracionMaximaCuotas: number;

    
  
    constructor() {
      this.id = 0;
      this.nombre='';
      this.tna = 0;
      this.duracionMinimaCuotas = 0;
      this.duracionMaximaCuotas = 0;
    //   this.montoMinimo = 0;
    //   this.montoMaximo = 0;
    //   this.edadMaxima = 0;
    //   this.precancelacion = 0;
    //   this.precancelacion = 0;
      
    }
  
    toString() {
      return `${this.id} ${this.nombre} `;
    }
  }
  