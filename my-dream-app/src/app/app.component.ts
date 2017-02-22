import { Component } from '@angular/core';

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
export class AppComponent {
  title = '!Mi app funciona!';
  habitaciones = [
    new Room(null, 1, false),
    new Room(null, 2, false),
    new Room(null, 3, true)
  ];
  cadenaTipo= function(isDouble: string){
    return isDouble? "Doble": "Simple";
  }
}
