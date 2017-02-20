// Implementa tres clases, geometria, triangulo y rectangulo, en TS, con dos parametros: 
// base y altura y un metodo calculaArea()

class Geometria{
    private base: number=0;
    private altura: number=0;

    constructor(base: number, altura: number){
        this.base=base;
        this.altura=altura;
    }

    protected calculaArea(){
        return base*altura;
    }


}


class Triangulo extends Geometria{

    constructor(base: number, altura: number){
        super(base, altura);
    }

    calculaArea(): number{
        return base*altura/2;
    }
    
}


class Rectangulo extends Geometria{

    constructor(base: number, altura: number){
        super(base, altura);
    }
    
}


let rectangulo: Rectangulo = new Rectangulo(2,3);
let triangulo: Triangulo = new Triangulo(2,3);

console.log("Area Rectangulo = "+ rectangulo.calculaArea+ " Area Triangulo = "+ triangulo.calculaArea);
