interface Geometria{
    base: number;
    altura: number;

    calculaArea(): number;
}


class Triangulo implements Geometria{
    base: number;
    altura: number;
    constructor(base: number, altura: number){
       this.base= base;
       this.altura= altura;
    }

    calculaArea(): number{
        return this.base*this.altura/2;
    }
    
}


class Rectangulo extends Geometria{

    constructor(base: number, altura: number){
        super(base, altura);
    }
    calculaArea(): number{
        return base*altura;
    }
}


let rect: Rectangulo = new Rectangulo(2,3);
let tri: Triangulo = new Triangulo(2,3);

console.log("Area Rectangulo = "+ rect.calculaArea()+ " Area Triangulo = "+ tri.calculaArea());
