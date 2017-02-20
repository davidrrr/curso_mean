abstract class Geometria{
    private base: number=0;
    private altura: number=0;

    constructor(base: number, altura: number){
        this.base=base;
        this.altura=altura;
    }

    abstract calculaArea(): number;
}


class Triangulo extends Geometria{

    constructor(base: number, altura: number){
        super(base, altura);
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


let rectangulo: Rectangulo = new Rectangulo(2,3);
let triangulo: Triangulo = new Triangulo(2,3);

console.log("Area Rectangulo = "+ rectangulo.calculaArea+ " Area Triangulo = "+ triangulo.calculaArea);
