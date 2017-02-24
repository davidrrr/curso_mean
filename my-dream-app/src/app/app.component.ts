import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

class Room{
  _id: any;
  number: number;


  constructor (_i: any, n: number, isDou: boolean){
    this._id=_i;
    this.number= n;
    this.tipo= isDou;
  }

  tipo = function(){
    return this.isDouble? "Doble" : "Simple";
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.1.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = '!Mi app funciona!';
  mensajes: String[]=[];
  contador: number =0;

  hacerClick(){
    this.contador++;
    this.title+=" pulsa "+this.contador;
  }

  ngOnChanges() {
    this.ng("ngOnChanges");
  }
  
  ngOnInit() {
    this.ng("ngOnInit");
  }

  ng(mensaje: String) {
    this.mensajes.push(new Date().toISOString() + ": "+ mensaje);
  }

  ng(nombreMetodo: String){
    this.mensajes.push(new Date().toISOString() + ": "+ mensaje);
  }


  habitaciones = [
    new Room(null, 1, false),
    new Room(null, 2, false),
    new Room(null, 3, true)
  ];
  cadenaTipo= function(isDouble: string){
    return isDouble? "Doble": "Simple";
  }
}
