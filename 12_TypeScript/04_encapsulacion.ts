class Padre{
    private propPrivada: number =0;
    public propPublica: number =0;
    private static tot
    protected propProtegida: number =0;
    
    damePropPrivada(){
        return this.propPrivada;
    }


}

let tuPadre: Padre = new Padre();
console.log("PropPrivada Padre= " +tuPadre.damePropPrivada() + " propPublica = "+ tuPadre.propPublica);


class HijoDePadre extends Padre{
    propValor :number;
    constructor(otroValor: number){
        super();
        // this.propPrivada= 33;
        this.propPublica = 55;
        this.propProtegida=66;
        this.propValor = otroValor;
    }

    toString(): string{
        return this.propPublica + " " + this.propValor;
    }
}


let tuHijoSiTienes : HijoDePadre = new HijoDePadre(89);
//tuHijoSiTienes.propProtegida=7;
//¿¿Si creo un objeto de tipo Padre y le asigno un objeto de tipo hijo, ¿Que pasa si llamamos al método toString()???

let otroHijo : Padre = new HijoDePadre(89);
console.log(otroHijo.toString());
